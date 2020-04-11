/**
 * Database connection using MySQL
 */

const mysql = require("mysql");
const { RateLimiterMySQL } = require("rate-limiter-flexible");

console.log("\x1b[32m%s\x1b[0m", "MySQL required successfully!");

let defaultDatabaseSettings = {
    supportBigNumbers: true,
    bigNumberStrings: true,
    port: process.env.DATABASE_PORT,
    host: "localhost",
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
};

defaultDatabaseSettings.database = "db_net";
let network = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_words";
let wordsDB = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_records";
let records = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_znam";
let ZNAM = mysql.createConnection(defaultDatabaseSettings);

function onConnect(database_name, error) {
    if (!!error) console.log(error);
    else
        console.log(
            "\x1b[32m%s\x1b[0m",
            "Successfully connected to the " + database_name + " database!"
        );
}

network.connect((error) => onConnect("main", error));
wordsDB.connect((error) => onConnect("words", error));
records.connect((error) => onConnect("records", error));
ZNAM.connect((error) => onConnect("ZNAM", error));

const pool = mysql.createPool({
    connectionLimit: 100,
    port: process.env.DATABASE_PORT,
    host: "localhost",
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
});

const opts = {
    storeClient: pool,
    dbName: "db_net",
    tableName: "limiter" // all limiters store data in one table
};

const ready = (err) => {
    if (err) {
        // log or/and process exit
    } else {
        // db and table checked/created
    }
};

module.exports.limiter = {
	RateLimiterMySQL,
	opts,
	ready
}

/** The MySql module */
module.exports.MySQL = mysql;

/** Connection with the network database */
module.exports.network = network;

module.exports.wordsDB = wordsDB;
module.exports.records = records;
module.exports.ZNAM = ZNAM;

let obj = {
    db_net: network,
    db_words: wordsDB,
    db_records: records,
    db_znam: ZNAM,
};

/** Collection of all the databases */
module.exports.obj = obj;

module.exports.endAll = () => {
    for (let db in obj) {
        obj[db].end();
    }
};
