/**
 *  Query module
 */

/** Database Controller */
var database;
var network;
var gameLogic;

let Initialize = function(node_databaseController, node_gameLogic) {
    database = node_databaseController;
    network = database.DB("db_net");
    gameLogic = node_gameLogic;
}

let Query = function(req, res) {
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
}

module.exports.Initialize = Initialize;
module.exports.Query = Query;