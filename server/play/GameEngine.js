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

let setUpGame = () => {
    // Sets up the demo
    // demoLogger.setUpDemo();
}

module.exports = {
    buildGameEngine,
    getTime,
    setUpGame
}