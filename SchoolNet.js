// CLEAR CONSOLE
console.clear();

var express = require('express');
var app = express();
var server = require('http').Server(app);

const requestIp = require('request-ip');
app.use(requestIp.mw())

const dotenv          = require('dotenv');
dotenv.config();

var flash             = require('connect-flash');
var crypto            = require('crypto');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var databases         = require('./server/dbConnection');
var sess              = require('express-session');

var MySQLStore = require('connect-mysql')(sess);
var MySQLOptions = {
    config: {
        user     : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASS,
        database: 'db_net'
    }
};

// var BetterMemoryStore = require('session-memory-store')(sess);

var bodyParser        = require('body-parser');
var cookieParser      = require('cookie-parser');
app.use(bodyParser());

var protectionChecks  = require('./server/protectionChecks');
var BLOCKED           = require('blocked-at');

const uuidv4 = require('uuid/v4');

var network = databases.network;
var wordsDB = databases.wordsDB;
var records = databases.records;

// COOKIE
var store = new MySQLStore(MySQLOptions);
// var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

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

var timer = BLOCKED(function(ms, stack) {
    // console.log('\x1b[31m%s\x1b[0m', "MAIN THREAD BLOCKED FOR " + ms + "ms");
    //  <= THE THREAD IS STARTED AT: " + stack
}, {threshold: 10});

var indexRequestsCount = 0;
var prev_ip = false;

// PASSPORT
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
    } , function (req, username, password, done){
        var salt = process.env.PASSPORT_SALT;

        var school = req.body.school;

        network.query("select * from tbl_students where Nickname = ? and School_ID = ?", [username, school], function(err, rows){
            if (err != null) console.log(err);
            
            //console.log("DEV: ");
            //console.log(rows);

            if (err) return done(err);
            if (!rows.length) {
                return done(null, false);
            }
            
            salt = salt + '' + password;
            var encPassword = crypto.createHash('sha256').update(salt).digest('hex');
            var dbPassword  = rows[0].Password;

            if(!(dbPassword == encPassword)){
                return done(null, false);
            }

            network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [1, rows[0].ID]);

            done(null, rows[0]);
        });
    }
));

passport.serializeUser(function(user, done){
    done(null, user.ID);
});

passport.deserializeUser(function(ID, done){
    network.query("select * from tbl_students where ID = ?", [ID], function (err, rows){
        done(err, rows[0]);
    });
});

app.post('/client/signin', function(req, res, next) {

    if (!protectionChecks.signinCheck(req.body.username, req.body.password, req.body.school, req.clientIp)) {
        res.send('incorrect');
        return;
    }

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            logErrorHandler("SQL", req.clientIp, null, err);
            // further print the username entered
            res.send(err);
        }

        if (!user) { return res.send("incorrect"); }
        
        req.logIn(user, function(err) {
            if (err) { 
                logErrorHandler("SQL", req.clientIp, null, err);
                // further print the username entered
                res.send(err);
            }
            
            res.send("success");
        });
    })(req, res, next);
});

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
                // REGISTER THE STUDENT
                // GET TEACHERS ID

                network.query("SELECT * FROM tbl_students WHERE Email = ? AND School_ID = ?", [req.body.teacheremail, req.body.school], function(err, rows) {
                    // if (err != null) console.log(err);
                    if (rows.length == 0) {
                        res.send("teacher email problem");
                        return;
                    }
                    teacherID = rows[0].ID;
                    
                    // var valuesINFO = ['', req.body.firstname + " " + req.body.lastname, '0000-00-00', teacherID, req.body.teacheremail];

                    var valuesINFO = {
                        ID : '',
                        Display_Name : req.body.firstname + " " + req.body.lastname,
                        Birthday : '0000-00-00'
                        //Teacher_ID : teacherID, 
                        // Teacher_Email : req.body.teacheremail
                    };

                    var salt = process.env.PASSPORT_SALT;
                    salt = salt + '' + req.body.password;
                    var encPassword = crypto.createHash('sha256').update(salt).digest('hex');
                    // var values = ['', req.body.username, encPassword, 0, req.body.firstname, req.body.lastname, req.body.school, req.body.email, req.body.gender, '0'];

                    var values = {
                        ID : '',
                        Nickname : req.body.username,
                        Password : encPassword,
                        Role : 0,
                        Firstname : req.body.firstname,
                        Lastname : req.body.lastname,
                        School_ID : req.body.school,
                        Email : req.body.email,
                        Gender : req.body.gender,
                        Valid : '1'
                    };

                    console.log('\x1b[32m%s\x1b[0m', "Registering a new student: " + req.body.username + " in school: " + req.body.school);
                    
                    console.log("DEV:");
                    console.log(values);
                    console.log(valuesINFO);
                    
                    // STUDENTS
                    network.query("INSERT INTO tbl_students SET ?", values, function(err, rows) {
                        // ERROR HANDLING
                        // DEV
                        console.log(rows);
                        
                        network.query("SELECT ID FROM tbl_students WHERE Nickname = ? AND Password = ?", [values.Nickname, values.Password], function(err, rows) {
                            var ID = rows[0].ID;

                            // STUDENTS_INFO
                            valuesINFO['ID'] = ID;
                            network.query("INSERT INTO tbl_students_info SET ?", valuesINFO, function(err, rows) {
                                // STATISTICS
                                var valuesStats = {
                                    ID : ID,
                                    Last_Date_Login : new Date().toISOString().slice(0, 19).replace('T', ' '),
                                    Successive_Logins : 1
                                }

                                var s_req = {
                                    ID : '',
                                    Student_ID : ID,
                                    Teacher_Email : req.body.teacheremail
                                }

                                network.query("INSERT INTO tbl_stats SET ?", valuesStats);
                                network.query("INSERT INTO tbl_student_request SET ?", s_req);
                                res.send("success");
                            });
                        });
                    });
                });
            } else if (req.body.student == 'false') {
                // REGISTER THE TEACHER                
                var valuesINFO = {
                    ID : '',
                    Display_Name : req.body.firstname + " " + req.body.lastname,
                    Birthday : '0000-00-00'
                    //Teacher_ID : '-1', 
                    // Teacher_Email : '-1'
                };

                var salt = process.env.PASSPORT_SALT;
                salt = salt + '' + req.body.password;
                var encPassword = crypto.createHash('sha256').update(salt).digest('hex');
                
                var values = {
                    ID : '',
                    Nickname : req.body.username,
                    Password : encPassword,
                    Role : 1,
                    Firstname : req.body.firstname,
                    Lastname : req.body.lastname,
                    School_ID : req.body.school,
                    Email : req.body.email,
                    Gender : req.body.gender,
                    Valid : '1'
                };

                // TEACHERS
                network.query("INSERT INTO tbl_students SET ?", values, function(err, rows) {
                    // ERROR HANDLING
                    // DEV
                    console.log(rows);
                    
                    network.query("SELECT ID FROM tbl_students WHERE Nickname = ? AND Password = ?", [values.Nickname, values.Password], function(err, rows) {
                        var ID = rows[0].ID;

                        // STUDENTS_INFO
                        valuesINFO['ID'] = ID;
                        network.query("INSERT INTO tbl_students_info SET ?", valuesINFO, function(err, rows) {
                            // STATISTICS
                            var valuesStats = {
                                ID : ID,
                                Last_Date_Login : new Date().toISOString().slice(0, 19).replace('T', ' '),
                                Successive_Logins : 1
                            }

                            network.query("INSERT INTO tbl_stats SET ?", valuesStats);
                            res.send("success");
                        });
                    });
                });
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

WORD_TYPES = ['imenka', 'pridavka', 'glagol', 'zamenka', 'broj', 'other'];

/** From String Type to Int Type */
function encodeWord(type) {
    if (type == -1) return -1;
    for (var i = 0; i < WORD_TYPES.length; ++i) {
        if (type === WORD_TYPES[i]) return i;
    }
    return 404;
}

/** From Int Type to String Type */
function decodeWord(type) {
    if (type == -1) return "mistake";
    return WORD_TYPES[type];
}

var TATKIN_WORD_COUNT = process.env.TATKIN_WORD_COUNT;
app.post('/client/query', function(req, res) {
    if (req.isAuthenticated()) {
        if (req.body.username === 'me') {
            network.query("SELECT Role, Display_Name, About, Emoji FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID = ? AND tbl_students_info.ID = ?", [req.user.ID, req.user.ID], function(err, rows) {
                res.send(rows);
            });
        } else if (req.body.stats) {
            if (req.body.stats === 'me') {
                // stats from games for the user
                network.query("SELECT * FROM tbl_stats WHERE ID = ?", req.user.ID, (err, statboard) => {
                    if (err) {
                        // PRIORITY ERROR
                        res.send("empty");
                        return;
                    }

                    if (statboard.length) {
                        res.send(statboard[0]);
                    } else {
                        // PRIORITY ERROR
                        res.send("empty");
                    }
                });
            }
        } else if (req.body.game) {
            if (req.body.game === 'tatkin') {
                if (req.body.command === 'list-games') {
                    network.query("SELECT Class_ID FROM tbl_classes_student WHERE Student_ID = ?", req.user.ID, (err, class_ids) => {
                        if (class_ids.length == 0) {
                            res.send("empty");
                            return;
                        }

                        let CLASS_IDs = [];
                        for (c in class_ids) CLASS_IDs.push(parseInt(class_ids[c].Class_ID));
                        network.query("SELECT * FROM tbl_games_current WHERE Class_ID IN (" + CLASS_IDs.join() + ") AND Privacy = ?", 1, (err, rows) => {
                            if (rows.length == 0) res.send("empty");
                            else {
                                let Teacher_IDs = [];
                                for (r in rows)
                                    Teacher_IDs.push(parseInt(rows[r].Teacher_ID));
                                network.query("SELECT ID, Firstname, Lastname FROM tbl_students WHERE ID IN (" + Teacher_IDs.join() + ")", (err, names) => {
                                    for (r in rows) {
                                        if (rows[r].Teacher_ID == names[r].ID) {
                                            rows[r].Fullname = names[r].Firstname + " " + names[r].Lastname;
                                        }
                                    }

                                    res.send(rows);
                                });
                            }
                        });
                    });
                }
            } else if (req.body.game === 'contribute-tatkin') {
                if (req.body.command === 'get-word') {
                    var random_id = Math.floor(Math.random() * TATKIN_WORD_COUNT) + 1;
                    wordsDB.query("SELECT ID, Word FROM tbl_words WHERE ID = ? AND Mistake = ?", [random_id, 0], function(err, rows) {
                        res.send(rows[0]);
                    })
                } else if (req.body.command === 'contribute') {
                    if (req.body.data) {
                        var DATA = req.body.data;
                        var MISTAKE = 0;
                        if (DATA.type == 'mistake') {
                            DATA.type = -1;
                            MISTAKE = 1;
                        }

                        var word_contribution = {
                            ID : '',
                            Word_ID : parseInt(DATA.word_id),
                            Student_ID : req.user.ID,
                            Type : encodeWord(DATA.type),
                            Mistake : MISTAKE
                        };

                        // console.log(word_contribution);
                        wordsDB.query("INSERT INTO tbl_contributions SET ?", word_contribution, function(err, rows) {
                            // console.log(rows);
                            // console.log("ERROR: " + err);

                            // ERROR HANDLING
                            if (err) {
                                res.send("failed");
                                logErrorHandler("SQL", null, req.user.ID, err, null);
                                return;
                            }

                            if (rows) {
                                network.query("SELECT Crowd_Tatkin FROM tbl_stats WHERE ID = ?", req.user.ID, function(err, rows) {
                                    // ERROR HANDLING
                                    if (err) {
                                        res.send("failed");
                                        logErrorHandler("SQL", null, req.user.ID, err, null);
                                        return;
                                    }

                                    if (rows) {
                                        var updateSTAT = parseInt(rows[0].Crowd_Tatkin) + 1;
                                        network.query("UPDATE tbl_stats SET Crowd_Tatkin = ? WHERE ID = ?", [updateSTAT, req.user.ID], function(err, rows) {
                                            // ERROR HANDLING
                                        });
                                    }
                                    
                                    res.send("success");
                                });
                            } else {
                                res.send("failed");
                            }
                        });
                        // console.log(DATA);
                    } else {
                        res.send("no data");
                    }
                } else {
                    res.send("invalid command");
                }
            } else if (req.body.game === 'game-info') {
                if (req.body.command === 'get-game-info') {
                    network.query("SELECT * FROM tbl_games_current WHERE ID = ?", req.body.data.Game_ID, (err, rows) => {
                        if (rows.length == 0) res.send("empty");
                        else res.send(rows);
                    });
                }
            } else {
                res.send("no game");
            }
        } else {
            res.send("no game");
        }
    } else if (req.body.command === 'get-main-statistics') {
        network.query("SELECT (SELECT COUNT(*) FROM tbl_students) AS Users", (err, countRows) => {
            if (err) {
                console.trace(err);
                countRows[0].Users = "";
            }
            
            network.query("SELECT (SUM(Crowd_Tatkin)) AS Contributions_Tatkin FROM tbl_stats", (err, contrib) => {
                if (err) {
                    console.trace(err);
                    contrib[0].Contributions_Tatkin = "";
                }
                
                network.query("SELECT Stat_Count FROM tbl_stats_web WHERE Stat_Name = 'Index Requests'", (err, countReq) => {
                    if (err) {
                        console.trace(err);
                        countReq[0].Stat_Count = "";
                    }
                    
                    res.send({
                        Users: countRows[0].Users,
                        Contributions_Tatkin: contrib[0].Contributions_Tatkin,
                        Index_Requests: countReq[0].Stat_Count
                    });
                });
            });
        });
    } 
});

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

var passportPass = {
    store           : store,
    passport        : passport,
    cookieParser    : cookieParser
}

let DBs = {
    network      : network,
    wordsDB         : wordsDB,
    records         : records
}

var gameSocketModule = require("./server/gameSocket.js").init(server, passportPass, DBs);

/** Custom-build error handler */
function logErrorHandler(type, ip, user, error, userinfo) {
    console.log(" ====================== ");
    console.log('\x1b[31m%s\x1b[0m%s\x1b[32m%s\x1b[0m', "ERROR:", " TYPE: " + type, ", IP: " + ip + ", USER: " + user);
    console.log(error);
    console.log(userinfo)
    console.log(" ====================== ");
}

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