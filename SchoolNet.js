const fs = require("fs");

let express = require('express');
let app = new express();

let server = require('http').createServer(app);

const dotenv            = require('dotenv');
dotenv.config();

process.config = {
    ...process.config,
    ...JSON.parse(fs.readFileSync(__dirname + '/config.json'))
}

if (process.config.usePM2) {
    const pm2setup = require('./server/pm2setup');
}

// EXPRESS THINGS
const requestIp = require('request-ip');
app.use(requestIp.mw())

const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

let ErrorHandler        = require("./server/ErrorHandler");

let databases           = require('./server/dbConnection');

const uuidv4 = require('uuid/v4');

let databaseController;
if (process.config.databaseController) {
    /** The Main Controller Module for database access */
    databaseController = require('./server/databaseController');
    databaseController.Connect(databases, { uuidv4 });
}

let BLOCKED           = require('blocked-at');

let timer = BLOCKED(function(ms, stack) {
    // console.log('\x1b[31m%s\x1b[0m', "MAIN THREAD BLOCKED FOR " + ms + "ms");
    //  <= THE THREAD IS STARTED AT: " + stack
}, {threshold: 10});

let network = databases.network;
let authenticationModule = require('./server/authentication');
let auth = authenticationModule.Initialize(app, network, { ErrorHandler: ErrorHandler });

if (process.config.guest) {
    const Guest = require("./server/guest");
    Guest.Initialize({
        app,
        uuidv4,
        network
    });
}

let gameLogic;
if (process.config.gameLogic) {
    // Requires the Main Game Logic Module
    gameLogic = require('./server/play/main.play')
        .Initialize(
            server,
            auth.passportPass,
            databaseController,
            network,
            app,
            express,
            { uuidv4 }
        );
}

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

const redirects = require("./server/redirects")(app);

if (gameLogic) {
    let QueryModule = require("./server/query");
    QueryModule.Initialize(databaseController, gameLogic);
    app.post('/client/query', QueryModule.Query);

    let UpdateModule = require("./server/update");
    UpdateModule.Initialize(databaseController, gameLogic);
    app.post('/client/update', UpdateModule.Update);

    let DashboardModule = require('./server/dashboard.js');
    DashboardModule = DashboardModule.Initialize(databaseController, gameLogic);

    let QueryDashboard = DashboardModule.Query;
    app.post('/client/dashboard/query', QueryDashboard.Query);
}

if (process.config.subApps) {
    const apps = require('./server/apps.main')(app);
}

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
console.log('\x1b[32m%s\x1b[0m', "SchoolNet Server Started at Port " + process.env.PORT);

let misc = require('./server/misc');
misc.Initialize(server, databases);

module.exports.quit = misc.quit;