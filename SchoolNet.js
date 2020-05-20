// SETUP THE HTTP AND HTTPS SERVERS
const fs = require('fs');
// const keywords = require('./keywords');

/* UNCOMMENT THIS IF YOU DONT HAVE NGINX SETUP
 * Also, change the ports:
 *   - HTTPS on 443
 *   - HTTP  on 80
const SSLSettings = {
    pfx: fs.readFileSync('C://cert//certificate.pfx'),
    passphrase: keywords.SSLPass()
};*/

let express = require('express');
// let HTTPApp = new express();
let app = new express();
/*
let http = require('http').createServer(HTTPApp);

HTTPApp.get('*', function(req, res) {  
    res.redirect('https://schoolnet.mk');
})

http.listen(80);*/

let server = require('http').createServer(app);

const pm2 = require('pm2');

pm2.connect((err) => {
    if (err) {
        console.log("Error connecting to pm2");
        return;
    }

    pm2.describe(process.pid, (err, description) => {
        if (err) {
            console.log("You are running only one instance of Node.js");
            return;
        }

        console.log(`Process ${description[0].name} with ${process.pid} PID has PM2 ID of ${description[0].pm_id}`);
    });
});

// EXPRESS THINGS
const requestIp = require('request-ip');
app.use(requestIp.mw())

const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

const dotenv            = require('dotenv');
dotenv.config();

let ErrorHandler        = require("./server/ErrorHandler");

let databases           = require('./server/dbConnection');

let ZBORAPI             = require('./build/ZBORAPI.js');
let PILOTAPI            = require('./build/PILOTAPI.js');
ZBORAPI.connect();
PILOTAPI.connect();

/** The Main Controller Module for database access */
let databaseController  = require('./server/databaseController');
databaseController.Connect(databases, {
    uuidv4: require('uuid/v4')
});

let BLOCKED           = require('blocked-at');

let timer = BLOCKED(function(ms, stack) {
    // console.log('\x1b[31m%s\x1b[0m', "MAIN THREAD BLOCKED FOR " + ms + "ms");
    //  <= THE THREAD IS STARTED AT: " + stack
}, {threshold: 10});

let network = databases.network;
let authenticationModule = require('./server/authentication');
let auth = authenticationModule.Initialize(app, network, { ErrorHandler: ErrorHandler });

// Requires the Main Game Logic Module
let gameLogic = require('./server/play/main.play')
    .Initialize(
        server,
        auth.passportPass,
        databaseController,
        network,
        app,
        express
    );

let indexRequestsCount = 0;
let prev_ip = false;

if (parseInt(process.env.READY) == 1) {
    let student_module = require("./server/student");
    student_module.BuildStudent(app, network, auth.crypto);

    let professor_module = require("./server/professor");
    professor_module.BuildProfessor(app, network, auth.crypto);

    app.post('/client/registerme', function(req, res, next) {
        
        console.log(" ================================= ");
        console.log(" == REGISTER REQ SENT");
        console.log(req.body);
        console.log(" ================================= ");

        // RECAPTCHA STUFF HERE
        
        let checks = auth.protectionChecks.registerCheck(req);
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
}

// REDIRECTING
app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/favicon.ico');
});

app.get('/robots.txt', function(req, res) {
    res.sendFile(__dirname + '/robots.txt');
});

app.get('/client/manifest.json', function(req, res) {
    res.sendFile(__dirname + '/client/manifest.json');
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

app.post('/zbor/api/light', ZBORAPI.light);
app.post('/zbor/api/query', ZBORAPI.query);
app.post('/zbor/api/update', ZBORAPI.update);
app.use('/zbor', express.static(__dirname + '/zbor/build'));

app.post('/pilot/api/light', (req, res) => {
    if (req.isAuthenticated() && req.user.Role === 4) {
        PILOTAPI.light(req, res);
    } else {
        res.send({ status: "unauth" });
    }
});

app.post('/pilot/api/query', (req, res) => {
    if (req.isAuthenticated() && req.user.Role === 4) {
        PILOTAPI.query(req, res);
    } else {
        res.send({ status: "unauth" });
    }
});

app.use('/pilot', (req, res, next) => {
    if (req.isAuthenticated() && req.user.Role === 4) {
        express.static(__dirname + '/pilot/build')(req, res, next);
    } else {
        res.redirect("/");
    }
});

// this is for another project
//app.use('/client/portfolio', express.static(__dirname + '/client/portfolio'));

app.use('/client/static', express.static(__dirname + '/client/static'));
app.use('/client/dynamics', express.static(__dirname + '/client/dynamics'));
app.use('/client/home', express.static(__dirname + '/client/home'));

app.use('/client/common', express.static(__dirname + '/client/common'));

app.get('/', function(req, res) {
    if (req.isAuthenticated()) {
        network.query("SELECT Redirect FROM tbl_students WHERE ID = ?", req.user.ID, (err, rows) => {
            if (err) {
                console.trace(err);
                res.sendFile(__dirname + '/client/index.html');
                return;
            }

            if (rows[0].Redirect == "ZNAM") {
                res.redirect("https:\/\/znam.schoolnet.mk/");
            } else {
                // res.sendFile(__dirname + '/client/lobby/index.html');
                res.redirect("https:\/\/znam.schoolnet.mk/");
            }
        });
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
        let currentStatCount = indexRequestsCount;
        network.query("UPDATE tbl_stats_web SET Stat_Count = Stat_Count + ? WHERE Stat_Name = 'Index Requests'", currentStatCount);
        indexRequestsCount = 0;
    }
});

app.get('/pin', (req, res) => {
    //res.sendFile(__dirname + '/client/guest/index.html');
    res.redirect('/');
});

app.get('/client/lobby/dashboard*', function(req, res) {
    /*if (req.isAuthenticated()) {
        if (req.user.Role == '1') {
            res.sendFile(__dirname + req.url);
        } else {
            res.redirect('/client/lobby/');
        }
    } else {*/
        res.redirect('/');
    //}
});

app.get('/client/lobby*', function(req, res) {
    /*if (req.isAuthenticated()) {
        res.sendFile(__dirname + req.url);
    } else {*/
        res.redirect('/');
    //}
});

app.get('/user/:userCalled', function(req, res) {
    // if (crash.it) console.log("crash");
    
    /*if (req.isAuthenticated()) {
        res.sendFile(__dirname + "/client/lobby/profile.html");
    } else {*/
        res.redirect('/');
    //}
});

app.get('/:pageCalled', function(req, res) {
    if (req.user) {
        console.log(req.user.ID + ' requested page out-of-bounds: ' + req.params.pageCalled);
    }
    
    res.redirect('/');
});

app.get('*', function(req, res) {
    res.redirect('/');
});

// STARTING THE SERVER
server.listen(process.env.PORT);
console.log('\x1b[32m%s\x1b[0m', "SchoolNet Server Started.");

let misc = require('./server/misc');
misc.Initialize(server, databases);

module.exports.quit = misc.quit;