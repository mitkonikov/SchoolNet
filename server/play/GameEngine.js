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
        demo.setUpDemo(rows[0].Demo_ID, rows[0].Game_ID, rows[0].Room_ID, () => {});
    });
}

let record = () => {

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
    setUpGame
}