// CLEAR CONSOLE
console.clear();

var express = require('express');
var app = express();
var server = require('http').Server(app);

const requestIp = require('request-ip');
app.use(requestIp.mw())

const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

const dotenv          = require('dotenv');
dotenv.config();

var ErrorHandler      = require("./server/ErrorHandler");

var databases         = require('./server/dbConnection');
var sess              = require('express-session');

var crypto            = require('crypto');

var network = databases.network;

var passport_module   = require('./server/passport.logic');
passport_module.Server(app);

var MySQLStore = require('connect-mysql')(sess);
var MySQLOptions = {
    config: {
        user     : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASS,
        database: 'db_net'
    }
};

var bodyParser        = require('body-parser');
var cookieParser      = require('cookie-parser');
app.use(bodyParser());

var protectionChecks  = require('./server/protectionChecks');
protectionChecks.Error(ErrorHandler);

var BLOCKED           = require('blocked-at');

const uuidv4 = require('uuid/v4');

var timer = BLOCKED(function(ms, stack) {
    // console.log('\x1b[31m%s\x1b[0m', "MAIN THREAD BLOCKED FOR " + ms + "ms");
    //  <= THE THREAD IS STARTED AT: " + stack
}, {threshold: 10});

// COOKIE
var store = new MySQLStore(MySQLOptions);

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
passport_module = passport_module.Initialize(databases.network, crypto);

var passportPass = {
    store           : store,
    passport        : passport_module.passport,
    cookieParser    : cookieParser
}

// Requires the Main Game Logic Module
var gameLogic = require('./server/play/main.play').Initialize(server, passportPass, databases);

var indexRequestsCount = 0;
var prev_ip = false;

app.post('/client/signin', function(req, res, next) {

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
});

var student_module = require("./server/student");
student_module.BuildStudent(app, databases.network, crypto);

var professor_module = require("./server/professor");
professor_module.BuildProfessor(app, databases.network, crypto);

app.post('/client/registerme', function(req, res, next) {
    
    console.log(" ================================= ");
    console.log(" == REGISTER REQ SENT");
    console.log(req.body);
    console.log(" ================================= ");

    // RECAPTCHA STUFF HERE
    
    var checks = protectionChecks.registerCheck(req.body, req.clientIp);
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

var QueryModule = require("./server/query");
QueryModule.Initialize(databases, gameLogic);

app.post('/client/query', QueryModule.Query);

app.post('/client/update', function(req, res) {
    // COMMAND
    // DATA
    if (req.isAuthenticated()) {
        let DATA = req.body.data;

        if (req.body.command === 'display-name-change') {
            if (DATA.displayname && DATA.displayname.length >= 5 && DATA.displayname.length <= 100) {
                network.query("UPDATE tbl_students_info SET Display_Name = ? WHERE ID = ? ", [DATA.displayname.trim(), req.user.ID], function(err, rows) {
                    if (rows) res.send("success");
                    else res.send("failed");
                });
            } else res.send("failed");
        } else if (req.body.command === 'desc-change') {
            if (DATA.description && DATA.description.length >= 5 && DATA.description.length <= 250) {
                network.query("UPDATE tbl_students_info SET About = ? WHERE ID = ? ", [DATA.description.trim(), req.user.ID], function(err, rows) {
                    if (rows) res.send("success");
                    else res.send("failed");
                });
            } else res.send("failed");
        }
    }
});

app.post('/client/dashboard/query', function(req, res) {
    if (req.isAuthenticated()) {
        if (typeof req.user !== undefined) {
            if (req.user.Role == 1) { // If it's a teacher
                if (typeof req.body.command !== undefined) {
                    if (req.body.command === 'list-class') {
                        // LIST ALL CLASSES
                        network.query("SELECT * FROM tbl_classes WHERE Teacher_ID = ?", req.user.ID, function(err, rows) {
                            res.send(rows);
                        });

                        return;
                    } else if (req.body.command === 'get-class') {
                        // GET INFO AND STATS ABOUT A SPECIFIC CLASS
                        res.send("success");
                        return;
                    } else if (req.body.command === 'list-students') {
                        // LIST THE STUDENTS IN A SPECIFIC CLASS
                        network.query("SELECT Student_ID FROM tbl_classes_student WHERE Class_ID = ?", 
                                        req.body.data.Class_ID, function(err, rows) {
                            
                            if (rows.length == 0) {
                                res.send("empty");
                                return;
                            }

                            let STUDENTS = [];
                            for (r in rows)
                                STUDENTS.push(parseInt(rows[r].Student_ID));

                            //console.log("requested students in a class: ");
                            //console.log(STUDENTS);
                            //console.log(databases.mySQL.escape(STUDENTS.join()));
                            
                            network.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID=tbl_students_info.ID AND tbl_students.ID IN (" + STUDENTS.join() + ")", function(err, rows) {
                                if (rows) res.send(rows);
                                else res.send("empty");
                            });
                        });
                    } else if (req.body.command === 'list-best-students') {
                        // LIST THE BEST STUDENTS IN A SPECIFIC CLASS
                        network.query("SELECT Student_ID FROM tbl_classes_student WHERE Class_ID = ?", 
                                        req.body.data.Class_ID, function(err, rows) {
                            
                            if (rows.length == 0) {
                                res.send("empty");
                                return;
                            }

                            let STUDENTS = [];
                            for (r in rows)
                                STUDENTS.push(parseInt(rows[r].Student_ID));
                            
                            network.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID=tbl_students_info.ID AND tbl_students.ID IN (" + STUDENTS.join() + ") AND Online = ?", '1', function(err, rows) {
                                if (rows) res.send(rows);
                                else res.send("empty");
                            });
                        });
                    } else if (req.body.command === 'list-request-students') {
                        // GET EVERY REQUEST
                        network.query("SELECT * FROM tbl_student_request WHERE Teacher_Email = ?", req.user.Email, function(err, rows) {
                            if (rows) {
                                let IDs = [];
                                for (r in rows) {
                                    IDs.push(parseInt(rows[r].Student_ID));
                                }

                                // console.log(databases.mySQL.escape(IDs.join()));
                                
                                network.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students_info JOIN tbl_students WHERE tbl_students.ID=tbl_students_info.ID AND tbl_students.ID IN (" + IDs.join() + ") LIMIT 25", IDs.join(), function(err, rows) {
                                    if (err) {
                                        res.send("problem");
                                        return;
                                    }
                                    
                                    // console.log(rows);
                                    
                                    if (rows.length) {
                                        res.send(rows);
                                    } else {
                                        res.send("problem");
                                    }
                                });
                            } else {
                                res.send("empty");
                            }
                        });
                    } else if (req.body.command === 'list-available-games') {
                        // LIST AVAILABLE GAMES
                        network.query("SELECT * FROM tbl_games", function(err, rows) {
                            if (rows) res.send(rows);
                            else res.send("empty");
                        });
                    } else if (req.body.command === 'add-class') {
                        // ADD A NEW CLASS
                        var classData = req.body.data;
                        classData["Teacher_ID"] = req.user.ID;
                        classData["Students_IDs"] = "-1";

                        network.query("INSERT INTO tbl_classes SET ?", classData, function(err, rows) {
                            if (rows) res.send("success");
                            else res.send("failed");
                        });

                        return;
                    } else if (req.body.command === 'add-students-to-class') {
                        // console.log(req.body.data);
                        
                        let in_class_id = parseInt(req.body.data.Class_ID);
                        let INPUT_DATA = req.body.data.Students_IDs;

                        for (d in INPUT_DATA) {
                            let STUDENT_DATA = { Class_ID: in_class_id, Student_ID: parseInt(INPUT_DATA[d]) };
                            network.query("INSERT INTO tbl_classes_student SET ?", STUDENT_DATA);
                            // network.query("DELETE")
                        }
/*
                        console.log(BINDED_DATA);

                        network.query("INSERT INTO tbl_classes_student (Class_ID, Student_ID) VALUES ?", BINDED_DATA, (err, rows) => {
                            if (err) console.log(err)
                        });*/

                        // network.query("UPDATE tbl_students SET Valid = ? WHERE ID IN (" + INPUT_DATA.join() + ")", '1');
                        // network.query("DELETE FROM tbl_student_request WHERE Teacher_Email = ? AND Student_ID IN (" + INPUT_DATA.join() + ")", req.user.Email);
                        res.send("success");
                    
                        /*network.query("SELECT ID, Students_IDs FROM tbl_classes WHERE ID = ? AND Teacher_ID = ?", [in_class_id, req.user.ID], function(err, rows) {
                            if (rows) {
                                let IDs = [];
                                if (rows[0].Students_IDs != '-1') {
                                    IDs = (rows[0].Students_IDs).split("-");
                                }

                                let INPUT_DATA = req.body.data.Students_IDs;

                                for (d in INPUT_DATA) {
                                    INPUT_DATA[d] = parseInt(INPUT_DATA[d]);
                                    IDs.push(INPUT_DATA[d]);
                                }

                                let UPDATE_IDs = "";
                                for (i in IDs) {
                                    UPDATE_IDs = UPDATE_IDs + IDs[i] + "-";
                                }
                                UPDATE_IDs = UPDATE_IDs.substring(0, UPDATE_IDs.length - 1);

                                network.query("UPDATE tbl_classes SET Students_IDs = ? WHERE ID = ?", [UPDATE_IDs, rows[0].ID]);
                                network.query("UPDATE tbl_students SET Valid = ? WHERE ID IN (" + INPUT_DATA.join() + ")", '1');
                                network.query("DELETE FROM tbl_student_request WHERE Teacher_Email = ? AND Student_ID IN (" + INPUT_DATA.join() + ")", req.user.Email);
                                res.send("success");
                            } else {
                                res.send("failed");
                            }
                        });*/
                    } else if (req.body.command === 'remove-class') {
                        // REMOVE A CLASS
                        // WHERE Teacher_ID = ? AND ID = ?
                        res.send("success");
                    } else if (req.body.command === 'play-game') {
                        let TEACHER_ID = req.user.ID;
                        network.query("SELECT * FROM tbl_games_current WHERE Teacher_ID = ?", TEACHER_ID, () => {
                            let CLASS_ID = parseInt(req.body.data.Class_ID);
                            let GAME_ID = parseInt(req.body.data.Game_ID);

                            let CURRENT_DATE_TIME = new Date().toISOString().slice(0, 19).replace('T', ' ');
                            let CURRENT_DATE_TIME_TRIMMED = CURRENT_DATE_TIME.multiReplace({
                                '-' : '',
                                ':' : '',
                                ' ' : '_'
                            });

                            let UUID = uuidv4().multiReplace({
                                '-' : '',
                                ':' : '',
                                ' ' : '_'
                            });

                            let GAME_CURRENT = {
                                Teacher_ID  : TEACHER_ID,
                                Class_ID    : CLASS_ID,
                                Game_ID     : GAME_ID,
                                Date_Time   : CURRENT_DATE_TIME,
                                Room_ID     : uuidv4().replace(/-/g, ''),
                                Demo_ID     : CURRENT_DATE_TIME_TRIMMED + "_" + UUID
                            };

                            network.query("INSERT INTO tbl_games_current SET ?", GAME_CURRENT);

                            res.send("success");
                        });

                    } else if (req.body.command === 'started-games') {
                        let TEACHER_ID = req.user.ID;
                        network.query("SELECT Game_ID FROM tbl_games_current WHERE Teacher_ID = ?", TEACHER_ID, (err, rows) => {
                            if (err) {
                                res.send("empty");
                                console.trace(err);
                                return;
                            }

                            if (rows.length > 0) {
                                network.query("SELECT Path_Dashboard FROM tbl_games WHERE ID = ?", rows[0].Game_ID, (err, games) => {
                                    if (err) {
                                        res.send("empty");
                                        console.trace(err);
                                        return;
                                    }

                                    if (rows.length)
                                        res.send(games[0]);
                                    else
                                        res.send("empty");
                                });
                            } else {
                                res.send("empty");
                            }
                        });
                    } else {
                        res.send("failed");
                    }
                } else {
                    // flag (COMMAND NOT DEFINED)
                    res.send("failed");
                }
            } else {
                // flag (INVALID ROLE)
                res.send("failed");
            }
        } else {
            // flag (USER NOT DEFINED)
            res.send("failed");
        }
    } else {
        // flag (NO AUTH)
        res.send("failed");
    }
});

app.post('/client/dashboard/update', function(req, res) {
    res.send("under construction");
});

app.get('/p/:pageCalled/:subPageCalled', function(req, res) {
    SCHOOL = req.params.pageCalled;
    USERNAME = req.params.subPageCalled;

    console.log(SCHOOL + " : " + USERNAME);

    res.redirect('/');
});

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
    console.log("User profile requested: " + req.params.userCalled);
    res.sendFile(__dirname + "/client/lobby/profile.html");
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