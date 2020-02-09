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
let demoLogger;

let buildGameEngine = (
    network_connect,
    records_connect,
    demoLogger_connect) => {
        network = network_connect;
        records = records_connect;
        demoLogger = demoLogger_connect;
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
    network.table("tbl_games_current").getCurrentGame.TeacherID(1, USER.ID, (rows) => {
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
 * @param {Array}       logData    List of demo logs
 * @param {Function}    callback    [Callback function]
 */
let recordLines = (demo_table, logData, callback) => {
    for (line of logData) {
        record(demo_table, line);
    }

    if (callback && typeof(callback) === "function")
        callback();
}

let updateRecord = (demo_table, logData, callback) => {
    // TODO: IF NEED put a callback
    obj.records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?", [logData.Source, logData.Command], (err, rows) => {
        // TODO: put error
        if (err) {
            if (callback && typeof(callback) === "function") {
                callback(false);
            }
            
            return;
        };

        if (rows.length) {
            logData.Time = getTime();
            obj.records.query("UPDATE " + demo_table + " SET ? WHERE Source = ? AND Command = ?", 
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

let userJoins = (user, student, demo_table, callback) => {
    userConnects(user, student, demo_table, true, callback);
}

let userLeaves = (user, student, demo_table, callback) => {
    userConnects(user, student, demo_table, false, callback);
}

let userConnects = (user, student, demo_table, joins, callback) => {
    let LEAVE = "left";
    let JOIN = "join";

    if (student == true) {
        LEAVE = "student left";
        JOIN = "student join";
    }

    if (!state) {
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
        if (rows.length) {
            records.query("UPDATE " + demo_table + " SET Time = ? WHERE Source = ? AND Command = ?", [getTime(), user, JOIN], (err) => {
                if (callback && typeof(callback) === "function")
                    callback(err);
            });
        } else {
            record(demo_table, { 
                Source : user,
                Command: JOIN 
            }, () => callback());
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

module.exports = {
    buildGameEngine,
    getTime,
    setUpGame,
    record,
    recordLines,
    updateRecord,
    userJoins,
    userLeaves
}