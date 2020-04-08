/**
 * @description This module is the bridge between
 * the game and its states. Not only that, this
 * module has built-in functions for easy game development.
 * 
 * > We have clearly defined how records should work
 * in our documention
 */

let network;
let records;
let dbController;
let demoLogger;
let built = false;

let buildGameEngine = (
    network_connect,
    databaseController_connect,
    demoLogger_connect) => 
{
    if (!built) {
        network = network_connect;
        dbController = databaseController_connect;
        records = databaseController_connect.DB("db_records");
        demoLogger = demoLogger_connect;
        built = true;
    }
}

let getTime = () => {
    let CURRENT_DATE_TIME = new Date().toISOString().replace('T', ' ');
    CURRENT_DATE_TIME = CURRENT_DATE_TIME.replace('Z', '');
    let CURRENT_TIME_TRIMMED = CURRENT_DATE_TIME.split(" ")[1].replace(/:/g, '');
    CURRENT_TIME_TRIMMED = CURRENT_TIME_TRIMMED.replace('.', '');

    return CURRENT_TIME_TRIMMED;
}

/**
 * Gets the Demo_ID and wheather its the
 * first time that teacher joins the dashboard
 * @param {*} socket    Socket Connection
 * @param {*} callback  Callback function with two params
 * callback(Demo_ID, firstTime) => {}
 */
let setUpGame = (socket, callback) => {
    // - WE HAVE THE TEACHER
    // 1. FIND THE CLASS AND THE GAME STARTED BY THE TEACHER
    // 2. INITIATE HEARTBEAT

    // create a records table
    let USER = socket.request.user;
    
    // find the Demo_ID (demo_table)
    dbController.DB("db_net").table("tbl_games_current").getCurrentGame.TeacherID(1, USER.ID, (rows) => {
        // JOINS THE ROOM
        // INITIATE A DEMO

        if (!rows.length) {
            return;
        }

        let Demo_ID = rows[0].Demo_ID;

        // JOIN ROOM
        socket.join(rows[0].Room_ID);

        /*setTimeout(() => {
            let ROOM = getRoom(socket.rooms);
            console.log("Room the teacher's in: " + ROOM);
        }, 100);*/

        // check if there's already a demo created
        records.query("SELECT 1 FROM " + Demo_ID + " LIMIT 1", (err, rows) => {
            if (err) {
                // table doesnt exist, create it
                createTable(Demo_ID, () => {
                    // now we have a table
                    callback(Demo_ID, true);
                });
            } else {
                // table exists
                callback(Demo_ID, false);
            }
        });

        // Set up the demo
        demoLogger.setUpDemo(rows[0].Demo_ID, rows[0].Game_ID, rows[0].Room_ID, () => {});
    });
}

let record = (demo_table, logData, callback) => {
    // write the time
    logData.Time = getTime();

    if (logData.Source === undefined) logData.Source = "server";

    // write the log
    records.query("INSERT INTO " + demo_table + " SET ?", logData, (err) => {
        if (callback && typeof(callback) === "function")
            callback(err);
    });
}

/**
 * Log data to the demo (multiple lines)
 * @param {String}      demo_table  Table Name
 * @param {Array}       logData     List of demo logs
 * @param {Function}    callback    [Callback function]
 */
let recordLines = (demo_table, logData, callback) => {
    for (line of logData) {
        record(demo_table, line);
    }

    if (callback && typeof(callback) === "function")
        callback();
}

/**
 * Gets only the data of a specific record
 * @param {String}      demo_table  The demo table
 * @param {JSON}        queryData   JSON formatted query data
 * @param {Function}    callback    Callback function
 */
let getRecord = (demo_table, queryData, callback) => {
    getAllRecords(demo_table, queryData, (record) => {
        if (typeof record[0] === "undefined") callback(null);
        else callback(record[0].Data);
    });
}

/**
 * Gets all of the records matching a certain criteria
 * @param {String}      demo_table  The demo table
 * @param {JSON}        queryData   JSON formatted query data
 * @param {Function}    callback    Callback function
 */
let getAllRecords = (demo_table, queryData, callback) => {
    if (queryData.Source == undefined && queryData.Data == undefined) {
        records.query("SELECT * FROM " + demo_table + " WHERE Command = ?",
            [queryData.Command], (err, rows) => {
                if (err) {
                    console.trace(err);
                    return;
                }

                if (typeof rows === "undefined") {
                    callback(false);
                    return;
                }

                callback(rows);
            });
    } else if (queryData.Data == undefined) {
        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?",
            [queryData.Source, queryData.Command], (err, rows) => {
                if (err) {
                    console.trace(err);
                    return;
                }

                if (typeof rows === "undefined") {
                    callback(false);
                    return;
                }

                callback(rows);
            });
    } else {
        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ? AND Data = ?",
            [queryData.Source, queryData.Command, queryData.Data], (err, rows) => {
                if (err) {
                    console.trace(err);
                    return;
                }
                
                if (typeof rows === "undefined") {
                    callback(false);
                    return;
                }

                callback(rows);
            });
    }
}

/**
 * Gets anything from the demo table
 *  - if the queryData.Data is not supplied
 *      - Returns JSON dict with Time and Data variables (RAW)
 *  - but if its supplied, 
 *      - it will just return the time at which that data is set
 * @param {JSON}        demo_table  Database Table
 * @param {String}      queryData   Query entry
 * @param {Function}    callback    Callback function
 */
let getRecordTime = (demo_table, queryData, callback) => {
    if (typeof queryData.Data == "undefined") {
        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?",
            [queryData.Source, queryData.Command], (err, rows) => {
                if (err) {
                    console.trace(err);
                    callback(null);
                    return;
                }

                if (typeof rows != "undefined") {
                    if (rows.length == 0) {
                        callback(null);
                    } else {
                        callback({ Time: rows[0].Time, Data: rows[0].Data });
                    }
                } else {
                    callback(null);
                }
            });
    } else {
        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ? AND Data = ?",
            [queryData.Source, queryData.Command, queryData.Data], (err, rows) => {
                if (err) {
                    console.trace(err);
                    callback(null);
                    return;
                }
                
                if (typeof rows != "undefined") {
                    if (rows.length == 0) {
                        callback(null);
                    } else {
                        callback(parseInt(rows[0].Time));
                    }
                } else {
                    callback(null);
                }
            });
    }
}

/**
 * Gets the last record with a specific command
 * @param {JSON}        demo_table  Database Table
 * @param {String}      queryData   Query entry
 * @param {Function}    callback    Callback function
 */
let getLastRecord = (demo_table, queryData, callback) => {
    if (queryData.Source == undefined && queryData.Data == undefined) {
        records.query("SELECT * FROM " + demo_table + " WHERE Command = ? ORDER BY ID DESC LIMIT 1",
            [queryData.Command], (err, rows) => {
                if (err) {
                    console.trace(err);
                    return;
                }

                if (typeof rows === "undefined") {
                    callback(false);
                    return;
                }

                callback(rows);
            });
    } else if (queryData.Data == undefined) {
        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ? ORDER BY ID DESC LIMIT 1",
            [queryData.Source, queryData.Command], (err, rows) => {
                if (err) {
                    console.trace(err);
                    return;
                }

                if (typeof rows === "undefined") {
                    callback(false);
                    return;
                }

                callback(rows);
            });
    } else {
        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ? AND Data = ? ORDER BY ID DESC LIMIT 1",
            [queryData.Source, queryData.Command, queryData.Data], (err, rows) => {
                if (err) {
                    console.trace(err);
                    return;
                }
                
                if (typeof rows === "undefined") {
                    callback(false);
                    return;
                }

                callback(rows);
            });
    }
}

/**
 * Updates a given record given an existing Source and Command
 * and the new Data
 * @param {JSON}        demo_table  Database Table
 * @param {String}      logData     Update entry
 * @param {Function}    callback    Callback function
 */
let updateRecord = (demo_table, logData, callback) => {
    // TODO: IF NEED put a callback
    records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?", [logData.Source, logData.Command], (err, rows) => {
        // TODO: put error
        if (err) {
            if (callback && typeof(callback) === "function") {
                callback(false);
            }
            
            return;
        };

        if (rows.length) {
            logData.Time = getTime();
            records.query("UPDATE " + demo_table + " SET ? WHERE Source = ? AND Command = ?", 
            [
                logData, 
                logData.Source, 
                logData.Command
            ], (err) => {
                if (callback && typeof(callback) === "function") {
                    if (err) callback(false);
                    else callback(true);
                }
            });
        } else {
            record(demo_table, logData, callback);
        }
    });
}

/**
 * Remember that a specific user has joined the game
 * @param {Number}      user                The User ID
 * @param {Boolean}     student             Whether he is a student or teacher
 * @param {String}      demo_table          Database table
 * @param {Function}    callback            Callback function
 */
let userJoins = (user, student, demo_table, callback) => {
    userConnects(user, student, demo_table, true, callback);
}

/**
 * Remember that a specific user has left the game
 * @param {Number}      user                The User ID
 * @param {Boolean}     student             Whether he is a student or teacher
 * @param {String}      demo_table          Database table
 * @param {Function}    callback            Callback function
 */
let userLeaves = (user, student, demo_table, callback) => {
    userConnects(user, student, demo_table, false, callback);
}

/** Function only used by the Game Engine itself */
let userConnects = (user, student, demo_table, joins, callback) => {
    let LEAVE = "left";
    let JOIN = "join";

    if (student == true) {
        LEAVE = "student left";
        JOIN = "student join";
    }

    if (!joins) {
        let temp = LEAVE;
        LEAVE = JOIN;
        JOIN = temp;
    }

    records.query("DELETE FROM " + demo_table + " WHERE Source = ? AND Command = ?", [user, LEAVE], (err) => {
        if (callback && typeof(callback) === "function")
            if (err) callback(err);
    });

    // update the log
    records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?", [user, JOIN], (err, rows) => {
        if (typeof rows == "undefined" || rows.length == 0) {
            record(demo_table, { 
                Source : user,
                Command: JOIN 
            }, () => {
                if (callback && typeof(callback) === "function") callback();
            });
        } else {
            records.query("UPDATE " + demo_table + " SET Time = ? WHERE Source = ? AND Command = ?", [getTime(), user, JOIN], (err) => {
                if (callback && typeof(callback) === "function")
                    callback(err);
            });
        }
    });
} 

let GameOver = () => {

}

/**
 * Create table for the demo log
 * @param {String}      demo_table      The table name
 * @param {Function}    callback        Callback function
 */
function createTable(demo_table, callback) {
    records.query("CREATE TABLE `db_records`.`" + demo_table + "` ( `ID` INT NOT NULL AUTO_INCREMENT , `Time` INT NOT NULL , `Source` TEXT NOT NULL , `Command` TEXT NOT NULL , `Data` TEXT NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;", (err) => {
        callback();
    });
}

/**
 * Useful Built-in functions
 */

/**
 * Update level in records
 * @param {JSON}    demo_table      The demo table name
 * @param {String}  currentLevel    The new level state
 */
let updateCurrentLevel = (demo_table, currentLevel) => {
    updateRecord(demo_table, 
        { 
            Source: "server", 
            Command: "current-level", 
            Data: currentLevel
        });
}

let getCurrentLevel = (demo_table, callback) => {
    records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?", ["server", "current-level"], (err, rows) => {
        if (typeof rows !== "undefined")
            callback(parseInt(rows[0].Data));
    });
}

let getLevelData = (level, demo_table, callback) => {
    records.query("SELECT Data FROM " + demo_table + " WHERE Source = ? AND Command = ?", ["server", "level-data-" + parseInt(level)], (err, rows) => {
        if (typeof rows !== "undefined")
            callback(JSON.parse(rows[0].Data));
    });
}

let getAllLevels = (demo_table, callback) => {
    records.query("SELECT Data FROM " + demo_table + " WHERE Source = ? AND Command LIKE ?", ["server", "level-data-%"], (err, rows) => {
        let levels = [];
        for (let row of rows) {
            levels.push(JSON.parse(row.Data));
        }

        callback(levels);
    });
}

let countAnswers = (demo_table, level, callback) => {
    
}

module.exports = {
    buildGameEngine,
    getTime,
    setUpGame,
    record,
    recordLines,
    getRecord,
    getAllRecords,
    getRecordTime,
    getLastRecord,
    updateRecord,
    userJoins,
    userLeaves,
    updateCurrentLevel,
    getCurrentLevel,
    getLevelData,
    getAllLevels,
    createTable
}