var mysql = require('mysql');

console.log('\x1b[32m%s\x1b[0m', "MySQL required successfully!");

var defaultDatabaseSettings = {
	supportBigNumbers: true,
	bigNumberStrings: true,
	port     : process.env.DATABASE_PORT,
	host     : "localhost",
	user     : process.env.DATABASE_USER,
	password : process.env.DATABASE_PASS
}

defaultDatabaseSettings.database = "db_net";
var network = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_words";
var wordsDB = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_records";
var records = mysql.createConnection(defaultDatabaseSettings);

function onConnect(database_name, error) {
	if (!!error) console.log(error)
	else console.log('\x1b[32m%s\x1b[0m', "Successfully connected to the " + database_name + " database!");
}

network.connect((error) => onConnect("main", error));
wordsDB.connect((error) => onConnect("words", error));
records.connect((error) => onConnect("records", error));

module.exports.mySQL = mysql;
module.exports.network = network;
module.exports.wordsDB = wordsDB;
module.exports.records = records;