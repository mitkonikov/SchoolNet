/**
 *  Database Controller Module:
 *  Used as an API to the database
 *  It's main goal is control access to the databases
 */

/**
 * @private
 */
let databases;
let API;

let Connect = function(databases_connect, API_connect) {
    databases = databases_connect;
    API = API_connect;
}

/**
 * Select a database 
 */
let DB = function(database) {
    let currentDB = databases.obj[database];

    let network_table = function(table) {

        /**
         * Gets basic info for the logged-in user
         * @param {String}      ID          The nickname of the user 
         * @param {Function}    callback    Callback function
         */
        let getInfoMe = function(ID, callback) {
            currentDB.query("SELECT Role, Display_Name, About, Emoji FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID = ? AND tbl_students_info.ID = ?", [ID, ID], (err, rows) => {
                callback(rows[0]);
            });
        }

        /**
         * Callbacks the function with one ID String
         */
        let getUserByNickname = function(nickname, callback) {
            currentDB.query("SELECT ID FROM tbl_students WHERE Nickname = ?", nickname, (err, rows) => {
                if (typeof rows != "undefined")
                    callback(rows[0].ID);
            });
        }

        let isFollowing = function(Follower_ID, Following_ID, callback) {
            if (Follower_ID == Following_ID) {
                callback("error");
                return false;
            }

            currentDB.query("SELECT ID FROM tbl_following WHERE Follower_ID = ? AND Following_ID = ?", [Follower_ID, Following_ID], (err, rows) => {                
                if (typeof rows !== "undefined")
                    if (rows.length > 0) callback("following");
                else callback("not-following");
            });
        }

        /**
         * Gets the basic info for a user with specific nickname
         * TODO: Have every user a unique profile URL
         * @param {Object}      req       Request
         * @param {String}      nickname  The nickname of the user 
         * @param {Function}    callback  Callback function
         */
        let getInfoUser = function(req, nickname, callback) {
            getUserByNickname(nickname, (ID) => {
                currentDB.query("SELECT Role, Display_Name, About, Emoji FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID = ? AND tbl_students_info.ID = ?", [ID, ID], function(err, rows) {
                    isFollowing(req.user.ID, ID, (following) => {
                        rows[0].Following = following;
                        callback(rows[0]);
                    });
                });
            });
        }

        let searchUsers = function(req, searchString, callback) {
            let name_search = "%" + searchString + "%";
            name_search = name_search.toLowerCase();

            currentDB.query("\
            SELECT ID, Nickname, Firstname, Lastname, \
                (SELECT COUNT(*) FROM tbl_following \
                    WHERE tbl_following.Follower_ID = ? AND tbl_following.Following_ID = tbl_students.ID)  AS 'Following' \
            FROM tbl_students \
            WHERE (LOWER(Firstname) LIKE ? OR LOWER(Lastname) LIKE ?) AND Role = ?\
                \
            ", [req.user.ID, name_search, name_search, '1'], (err, rows) => {
                for (let i = 0; i < rows.length; ++i) {
                    if (rows[i].ID == req.user.ID) {
                        rows.splice(i, 1);
                    }
                }
                
                callback(rows);
            });
        }

        let getStatistics = function(req, callback) {
            // stats from games for the user
            currentDB.query("SELECT * FROM tbl_stats WHERE ID = ?", req.user.ID, (err, statboard) => {
                if (err) {
                    // PRIORITY ERROR
                    callback("empty");
                    return;
                }

                if (statboard.length) {
                    callback(statboard[0]);
                } else {
                    // PRIORITY ERROR
                    callback("empty");
                }
            });
        }

        /**
         * Follow or Unfollow a user
         * @param {Object}      req         Full Request
         * @param {Object}      data        Data about the request
         * @param {Function}    callback    Callback function
         */
        let followUser = function(req, data, callback) {
            getUserByNickname(data.Following_User, (followingID) => {
                isFollowing(req.user.ID, followingID, (follow) => {
                    if (follow == "error") {
                        callback("error");
                        return false;
                    }

                    if (follow == "not-following") {
                        let followData = { 
                            Follower_ID: req.user.ID, 
                            Following_ID: followingID
                        };
        
                        currentDB.query("INSERT INTO tbl_following SET ?", 
                            [followData, followData], (err, rows) => {
                            callback("followed");
                        });
                    } else {
                        currentDB.query("DELETE FROM tbl_following WHERE \
                                        Follower_ID = ? AND Following_ID = ? ", [req.user.ID, followingID], (err, rows) => {
                            callback("unfollowed");
                        });
                    }
                });
            });
        }

        let playerScore = {
            getScore: function(game, playerID, callback) {
                currentDB.query("SELECT Score_Tatkin FROM tbl_stats WHERE ID = ?", playerID, (err, rows) => {
                    callback(rows);
                });
            }
        }

        let getCurrentGame = {
            Info: {
                whereID: function(gameID, callback) {
                    currentDB.query("SELECT * FROM tbl_games_current WHERE ID = ?", gameID, (err, rows) => {
                        if (rows.length == 0) callback("empty");
                        else callback(rows);
                    });
                },

                whereDemoID: function(demoID, callback) {
                    currentDB.query("SELECT * FROM tbl_games_current WHERE Demo_ID = ?", demoID, (err, rows) => callback(rows));
                },

                whereTeacherID: function(teacherID, callback) {
                    currentDB.query("SELECT * FROM tbl_games_current WHERE Teacher_ID = ?", teacherID, (err, rows) => {
                        callback(rows);
                    });
                }
            },

            TeacherID: function(gameID, userID, callback) {
                currentDB.query("SELECT * FROM tbl_games_current WHERE Game_ID = ? AND Teacher_ID = ?", [gameID, userID], (err, rows) => {
                    callback(rows);
                });
            },

            getClassID: function(Room_ID, callback) {
                callback.query("SELECT Class_ID FROM tbl_games_current WHERE Room_ID = ?", Room_ID, (err, rows) => {           
                    if (typeof rows !== "undefined")
                        if (rows)
                            if (rows.length)
                                if (callback && typeof(callback) === "function")
                                    callback(rows[0].Class_ID);
                });
            },

            getStartedGames: function(teacherID, callback) {
                currentDB.query("SELECT Game_ID FROM tbl_games_current WHERE Teacher_ID = ?", teacherID, (err, rows) => {
                    callback(rows);
                });
            },

            setPrivacy: function(privacy, room) {
                currentDB.query("UPDATE tbl_games_current SET Privacy = ? WHERE Room_ID = ?", [privacy, room]);
            },
            setState: function(state, room) {
                currentDB.query("UPDATE tbl_games_current SET State = ? WHERE Room_ID = ?", [state, room]);
            }
        }

        let Game = {
            getDashboardPath: function(gameID, callback) {
                currentDB.query("SELECT Path_Dashboard FROM tbl_games WHERE ID = ?", gameID, (err, rows) => {
                    callback(rows);
                });
            }
        }

        let getStudentIDs = {
            inClass: function(classID, callback) {
                currentDB.query("SELECT Student_ID FROM tbl_classes_student WHERE Class_ID = ?", classID, (err, students) => {
                    let STUDENT_IDS = [];
                    for (s of students) {
                        STUDENT_IDS.push(parseInt(s.Student_ID));
                    }
            
                    if (typeof students !== "undefined")
                        if (students.length)
                            if (callback && typeof(callback) === "function")
                                callback(STUDENT_IDS);
                });
            }
        }

        let getDisplayName = {
            in: function(StudentIDs, callback) {
                currentDB.query("SELECT ID, Display_Name FROM tbl_students_info WHERE ID IN (" + StudentIDs.join() + ")", (err, rows) => {
                    callback(rows);
                });
            }
        }

        let playGame = (gameID, classID, teacherID, callback) => {
            let TEACHER_ID = parseInt(teacherID);
            let GAME_ID = parseInt(gameID);
            let CLASS_ID = parseInt(classID);
            let CURRENT_DATE_TIME = new Date().toISOString().slice(0, 19).replace('T', ' ');
                
            let CURRENT_DATE_TIME_TRIMMED = CURRENT_DATE_TIME.multiReplace({
                '-' : '',
                ':' : '',
                ' ' : '_'
            });

            let UUID = API.uuidv4().multiReplace({
                '-' : '',
                ':' : '',
                ' ' : '_'
            });

            let GAME_CURRENT = {
                Teacher_ID  : TEACHER_ID,
                Class_ID    : CLASS_ID,
                Game_ID     : GAME_ID,
                Date_Time   : CURRENT_DATE_TIME,
                Room_ID     : API.uuidv4().replace(/-/g, ''),
                Demo_ID     : CURRENT_DATE_TIME_TRIMMED + "_" + UUID
            };

            currentDB.query("INSERT INTO tbl_games_current SET ?", GAME_CURRENT);

            callback("success");
        }
        
        let saveGame = (SAVED) => {
            currentDB.query("INSERT INTO tbl_games_played SET ?", SAVED);
        }

        let deleteCurrentGame = (demoTable) => {
            currentDB.query("DELETE FROM tbl_games_current WHERE Demo_ID = ?", demoTable);
        }

        let getAllStudentRequests = (email, callback) => {
            currentDB.query("SELECT * FROM tbl_student_request WHERE Teacher_Email = ?", email, function(err, rows) {
                if (rows) {
                    let IDs = [];
                    for (r in rows) {
                        IDs.push(parseInt(rows[r].Student_ID));
                    }

                    // console.log(databases.mySQL.escape(IDs.join()));
                    
                    currentDB.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students_info JOIN tbl_students WHERE tbl_students.ID=tbl_students_info.ID AND tbl_students.ID IN (" + IDs.join() + ") LIMIT 25", IDs.join(), function(err, rows) {
                        if (err) {
                            callback("problem");
                            return;
                        }
                        
                        // console.log(rows);
                        
                        if (rows.length) {
                            callback(rows);
                        } else {
                            callback("problem");
                        }
                    });
                } else {
                    res.send("empty");
                }
            });
        }

        let getAvailableGames = (callback) => {
            currentDB.query("SELECT * FROM tbl_games", function(err, rows) {
                if (rows) callback(rows);
                else callback("empty");
            });
        }

        let Class = {
            getAll: {
                whereTeacher: (teacherID, callback) => {
                    currentDB.query("SELECT * FROM tbl_classes WHERE Teacher_ID = ?", teacherID, function(err, rows) {
                        callback(rows);
                    });
                }
            },
            whereStudentID: (studentID, callback) => {
                currentDB.query("SELECT Class_ID FROM tbl_classes_student WHERE Student_ID = ?", studentID, (err, rows) => {
                    callback(rows);
                });
            },
            add: (classData, callback) => {
                currentDB.query("INSERT INTO tbl_classes SET ?", classData, function(err, rows) {
                    if (rows) callback("success");
                    else callback("failed");
                });
            }
        }

        let Student = {
            studentsInfoInClass: (classID, callback) => {
                // get the student IDs in one class
                getStudentIDs.inClass(classID, (studentIDs) => {
                    if (studentIDs.length == 0) {
                        callback("empty");
                        return;
                    }

                    // get basic info
                    currentDB.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID=tbl_students_info.ID AND tbl_students.ID IN (" + studentIDs.join() + ")", function(err, rows) {
                        if (rows) callback(rows);
                        else callback("empty");
                    });
                });
            },
            bestStudentsInfoInClass: (classID, callback) => {
                // get the student IDs in one class
                getStudentIDs.inClass(classID, (studentIDs) => {
                    if (studentIDs.length == 0) {
                        callback("empty");
                        return;
                    }

                    // get only online
                    currentDB.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID=tbl_students_info.ID AND tbl_students.ID IN (" + studentIDs.join() + ") AND Online = ?", '1', function(err, rows) {
                        if (rows) callback(rows);
                        else callback("empty");
                    });
                });
            },
            getOnlineStudents: (StudentIDs, callback) => {
                let SSIDs = StudentIDs.join();
                currentDB.query("SELECT tbl_students.ID, Display_Name, Online FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID IN (" + SSIDs + ") AND tbl_students_info.ID = tbl_students.ID", (err, info) => {
                    callback(info);
                });
            }
        }

        return {
            getInfoMe,
            getUserByNickname,
            getInfoUser,
            searchUsers,
            getStatistics,
            followUser,
            getCurrentGame,
            deleteCurrentGame,
            getStudentIDs,
            getDisplayName,
            getAllStudentRequests,
            getAvailableGames,
            playGame,
            saveGame,
            Game,
            Class,
            Student
        }
    }

    /**
     * Main Query function 
     */
    let network_query = function(what, where, callback) {
        currentDB.query(what, where, callback);
    }

    let networkAPI = {
        table: network_table,
        query: network_query,
    }

    let DBSelector = {
        "db_net": networkAPI,
        "db_words": databases.wordsDB,
        "db_records": databases.records
    }

    return DBSelector[database];
}

module.exports.Connect = Connect;
module.exports.DB = DB;