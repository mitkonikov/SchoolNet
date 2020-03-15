// CLEAR CONSOLE
console.clear();

let express = require('express');
let app = express();
let server = require('http').Server(app);

const requestIp = require('request-ip');
app.use(requestIp.mw())

const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

const dotenv            = require('dotenv');
dotenv.config();

let ErrorHandler        = require("./server/ErrorHandler");

let databases           = require('./server/dbConnection');

/** The Main Controller Module for database access */
let databaseController  = require('./server/databaseController');
databaseController.Connect(databases, {
    uuidv4: require('uuid/v4')
});

let sess                = require('express-session');

let crypto              = require('crypto');

let network = databases.network;

let passport_module   = require('./server/passport.logic');
passport_module.Server(app);

let MySQLStore = require('connect-mysql')(sess);
let MySQLOptions = {
    config: {
        user     : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASS,
        database: 'db_net'
    }
};

let bodyParser        = require('body-parser');
let cookieParser      = require('cookie-parser');
app.use(bodyParser());

let protectionChecks  = require('./server/protectionChecks');
protectionChecks.Error(ErrorHandler);

let BLOCKED           = require('blocked-at');

let fetch = require('node-fetch');

let timer = BLOCKED(function(ms, stack) {
    // console.log('\x1b[31m%s\x1b[0m', "MAIN THREAD BLOCKED FOR " + ms + "ms");
    //  <= THE THREAD IS STARTED AT: " + stack
}, {threshold: 10});

// COOKIE
let store = new MySQLStore(MySQLOptions);

app.use(sess({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        expires: 1000 * 60 * 60 * 24 * 3
    },
    store:  store,
    resave: true,
    saveUninitialized: true
}));

// Initializes the passport module
passport_module = passport_module.Initialize(network, crypto);

let passportPass = {
    store           : store,
    passport        : passport_module.passport,
    cookieParser    : cookieParser
}

// Requires the Main Game Logic Module
let gameLogic = require('./server/play/main.play').Initialize(server, passportPass, databaseController, network);

let indexRequestsCount = 0;
let prev_ip = false;

app.post('/client/signin', function(req, res, next) {
    const secret_key = process.env.CAPTCHA_SECRET;
    const token = req.body.token;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    /*fetch(url, {
        method: 'post'
    })
        .then(response => response.json())
        .then(google_response => {
            if (typeof google_response === "undefined") {
                res.redirect('/');
                return;
            }*/

            //if (google_response.success) {
            if (true) {
            
                if (!protectionChecks.signinCheck(req)) {
                    res.send('incorrect');
                    return;
                }
            
                passport_module.passport.authenticate('local', function(err, user, info) {
                    if (err) {
                        ErrorHandler.log("SQL", req.clientIp, null, err);
                        // further print the username entered
                        res.send(err);
                    }
            
                    if (!user) { return res.send("incorrect"); }
                    
                    req.logIn(user, function(err) {
                        if (err) { 
                            ErrorHandler.log("SQL", req.clientIp, null, err);
                            // further print the username entered
                            res.send(err);
                        }
                        
                        res.send("success");
                    });
                })(req, res, next);
            }
//        });
});

let student_module = require("./server/student");
student_module.BuildStudent(app, network, crypto);

let professor_module = require("./server/professor");
professor_module.BuildProfessor(app, network, crypto);

app.post('/client/registerme', function(req, res, next) {
    
    console.log(" ================================= ");
    console.log(" == REGISTER REQ SENT");
    console.log(req.body);
    console.log(" ================================= ");

    // RECAPTCHA STUFF HERE
    
    let checks = protectionChecks.registerCheck(req);
    if (checks != true) {
        res.send(checks);
        return;
    }

    // Check if there's already an existing user with the same username in the same school
    network.query("SELECT * FROM tbl_students WHERE Nickname = ? AND School_ID = ?", [req.body.username, req.body.school], function(err, rows) {

        // if (err != null) console.log(err);
        if (rows.length == 0) {
            if (req.body.student == 'true') {
                student_module.Register(req, res);
            } else if (req.body.student == 'false') {
                professor_module.Register(req, res);
            } else {
                res.send("failed");
            }
        } else {
            res.send("already taken");
        }
    });
});

app.get('/client/logout', function(req, res) {
    if (req.isAuthenticated()) {
        network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [0, req.user.ID]);
        req.logout();
    }
    res.redirect('/');
});

// REDIRECTING
app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/favicon.ico');
});

let QueryModule = require("./server/query");
QueryModule.Initialize(databaseController, gameLogic);
app.post('/client/query', QueryModule.Query);

let UpdateModule = require("./server/update");
UpdateModule.Initialize(databaseController, gameLogic);
app.post('/client/update', UpdateModule.Update);

let DashboardModule = require('./server/dashboard.js');
DashboardModule = DashboardModule.Initialize(databaseController, gameLogic)

let QueryDashboard = DashboardModule.Query;
app.post('/client/dashboard/query', QueryDashboard.Query);

app.post('/client/dashboard/update', function(req, res) {
    res.send("under construction");
});

app.get('/p/:pageCalled/:subPageCalled', function(req, res) {
    SCHOOL = req.params.pageCalled;
    USERNAME = req.params.subPageCalled;

    console.log(SCHOOL + " : " + USERNAME);

    res.redirect('/');
});

// this is for another project
app.use('/client/portfolio', express.static(__dirname + '/client/portfolio'));

app.use('/client/static', express.static(__dirname + '/client/static'));
app.use('/client/dynamics', express.static(__dirname + '/client/dynamics'));
app.use('/client/home', express.static(__dirname + '/client/home'));

app.get('/', function(req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(__dirname + '/client/lobby/index.html');
    } else {
        res.sendFile(__dirname + '/client/index.html');
    }

    const ip = req.clientIp;
    if (ip != prev_ip) {
        console.log("User " + ip + " requested index.html");
        prev_ip = ip;
    }

    indexRequestsCount += 1;
    if (indexRequestsCount % 10 == 0) {
        network.query("SELECT Stat_Count From tbl_stats_web WHERE Stat_Name = ?", 'Index Requests', function(err, rows) {
            currentStatCount = rows[0].Stat_Count;
            currentStatCount += indexRequestsCount;
            network.query("UPDATE tbl_stats_web SET Stat_Count = ? WHERE Stat_Name = 'Index Requests'", currentStatCount);
            indexRequestsCount = 0;
        });
    }
});

app.get('/pin', (req, res) => {
    res.sendFile(__dirname + '/client/guest/index.html');
});

app.get('/client/lobby/dashboard*', function(req, res) {
    if (req.isAuthenticated()) {
        if (req.user.Role == '1') {
            res.sendFile(__dirname + req.url);
        } else {
            res.redirect('/client/lobby/');
        }
    } else {
        res.redirect('/');
    }
});

app.get('/client/lobby*', function(req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(__dirname + req.url);
    } else {
        res.redirect('/');
    }
});

app.get('/user/:userCalled', function(req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(__dirname + "/client/lobby/profile.html");
    } else {
        res.redirect('/');
    }
});

app.get('/:pageCalled', function(req, res) {
    console.log('User requested page out-of-bounds: ' + req.params.pageCalled);
    res.redirect('/');
});

app.get('*', function(req, res) {
    res.redirect('/');
});

// STARTING THE SERVER
server.listen(process.env.PORT);
console.log('\x1b[32m%s\x1b[0m', "Server started.");

String.prototype.multiReplace = function(array) {
    let result = "";
    
    for (let c = 0; c < this.length; ++c) { // for every letter in the string
        let replaced = false;
        for (let r in array) { // check for replacements in the array
            if (this[c] == r) {
                result += array[r];
                replaced = true;
                break;
            }
        }

        if (!replaced) result += this[c];
    }

    return result;
}

/** Used to safely shutdown the server */
process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
        network.end(() => {
            console.log('mySQL connection closed.');
            process.exit(0);
        });
    });
});