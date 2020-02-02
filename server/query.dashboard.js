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
                    if (req.body.command === 'list-class') { // LIST ALL CLASSES
                        network.table().Class.getAll.whereTeacher(req.user.ID, (rows) => res.send(rows));
                    } else if (req.body.command === 'get-class') {
                        // GET INFO AND STATS ABOUT A SPECIFIC CLASS
                        res.send("success");
                        return;
                    } else if (req.body.command === 'list-students') {
                        // LIST THE STUDENTS IN A SPECIFIC CLASS
                        network.table().Student.studentsInfoInClass(req.body.data.Class_ID, (response) => res.send(response));
                    } else if (req.body.command === 'list-best-students') {
                        // LIST THE BEST STUDENTS IN A SPECIFIC CLASS
                        network.table().Student.bestStudentsInfoInClass(req.body.data.Class_ID, (response) => res.send(response));
                    } else if (req.body.command === 'list-request-students') {
                        // GET EVERY REQUEST
                        network.table().getAllStudentRequests(req.user.Email, (rows) => res.send(rows));
                    } else if (req.body.command === 'list-available-games') {
                        // LIST AVAILABLE GAMES
                        network.table().getAvailableGames((response) => res.send(response));
                    } else if (req.body.command === 'add-class') {
                        // ADD A NEW CLASS
                        let classData = req.body.data;
                        classData["Teacher_ID"] = req.user.ID;

                        network.table().Class.add(classData, (response) => res.send(response));

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
                        // TODO: Rethink this part
                        console.log(BINDED_DATA);

                        network.query("INSERT INTO tbl_classes_student (Class_ID, Student_ID) VALUES ?", BINDED_DATA, (err, rows) => {
                            if (err) console.log(err)
                        });*/

                        // network.query("UPDATE tbl_students SET Valid = ? WHERE ID IN (" + INPUT_DATA.join() + ")", '1');
                        // TODO: You dont want to delete the students requests
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
                        let TEACHER_ID = parseInt(req.body.data.Teacher_ID);
                        network.table().getCurrentGame.Info.whereTeacherID(TEACHER_ID, (rows) => {
                            network.table().playGame(
                                req.body.data.Game_ID,
                                req.body.data.Class_ID,
                                TEACHER_ID,
                                (response) => res.send(response)
                            );
                        });
                    } else if (req.body.command === 'started-games') {
                        network.table().getCurrentGame.getStartedGames(req.user.ID, (rows) => {
                            if (rows.length > 0) {
                                network.table().Game.getDashboardPath(rows[0].Game_ID, (games) => {
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