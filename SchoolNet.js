let express = require('express');
let app = new express();

let server = require('http').createServer(app);

const dotenv            = require('dotenv');
dotenv.config();

const pm2 = require('pm2');

pm2.connect((err) => {
    if (err) {
        console.log("Error connecting to pm2");
        return;
    }
    
    pm2.list((err, list) => {
        if (err) {
            console.log("Internal PM2 Error: ", err);
            return;
        }

        let pid = parseInt(process.pid);

        for (let p of list) {
            if (p.pid == pid) {
                process.env.PM2_ID = p.pm_id;
                console.log(`Process [${p.name}] with ${process.pid} PID has PM2 ID of ${p.pm_id}`);
                break;
            }
        }
    });
});

// EXPRESS THINGS
const requestIp = require('request-ip');
app.use(requestIp.mw())

const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

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

app.get('/play/guest', (req, res) => {
    let isMobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(req.headers["user-agent"]);

    network.query("SELECT * FROM tbl_guests WHERE IP = ? AND Mobile = ?", [req.clientIp, isMobile], (err, rows) => {
        if (err) res.send("in construction...");
        
        res.send(rows[0]);
    });
});

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