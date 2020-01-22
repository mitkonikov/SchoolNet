/**
 *  Database Controller Module:
 *  Used as an API to the database
 *  It's main goal is control access to the databases
 */

/**
 * @private
 */
let databases;

let Connect = function(databases_connect) {
    databases = databases_connect;
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
                callback(rows[0].ID);
            });
        }

        let isFollowing = function(Follower_ID, Following_ID, callback) {
            currentDB.query("SELECT ID FROM tbl_following WHERE Follower_ID = ? AND Following_ID = ?", [Follower_ID, Following_ID], (err, rows) => {                
                if (typeof rows !== undefined)
                    if (rows.length > 0) callback(true);
                else callback(false);
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
                    })
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
                    if (follow == false) {
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
            Info: function(gameID, callback) {
                currentDB.query("SELECT * FROM tbl_games_current WHERE ID = ?", gameID, (err, rows) => {
                    if (rows.length == 0) callback("empty");
                    else callback(rows);
                });
            },

            TeacherID: function(gameID, userID, callback) {
                currentDB.query("SELECT * FROM tbl_games_current WHERE Game_ID = ? AND Teacher_ID = ?", [gameID, userID], (err, rows) => {
                    callback(rows);
                });
            },

            getClassID: function(Room_ID, callback) {
                callback.query("SELECT Class_ID FROM tbl_games_current WHERE Room_ID = ?", Room_ID, (err, rows) => {           
                    if (typeof rows !== undefined)
                        if (rows)
                            if (rows.length)
                                if (callback && typeof(callback) === "function")
                                    callback(rows[0].Class_ID);
                });
            }
        }

        let Game = {
            setPrivacy: function(privacy, room) {
                currentDB.query("UPDATE tbl_games_current SET Privacy = ? WHERE Room_ID = ?", [privacy, room]);
            },
            setState: function(state, room) {
                currentDB.query("UPDATE tbl_games_current SET State = ? WHERE Room_ID = ?", [state, room]);
            }
        }

        let getStudentIDs = {
            inClass: function(classID, callback) {
                currentDB.query("SELECT Student_ID FROM tbl_classes_student WHERE Class_ID = ?", classID, (err, students) => {
                    let STUDENT_IDS = [];
                    for (s of students) {
                        STUDENT_IDS.push(parseInt(s.Student_ID));
                    }
            
                    if (typeof students !== undefined)
                        if (students.length)
                            if (callback && typeof(callback) === "function")
                                callback(STUDENT_IDS);
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
            Game,
            getStudentIDs
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