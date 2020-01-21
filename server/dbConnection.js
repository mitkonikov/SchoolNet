const mysql = require('mysql');

console.log('\x1b[32m%s\x1b[0m', "MySQL required successfully!");

let defaultDatabaseSettings = {
	supportBigNumbers: true,
	bigNumberStrings: true,
	port     : process.env.DATABASE_PORT,
	host     : "localhost",
	user     : process.env.DATABASE_USER,
	password : process.env.DATABASE_PASS
}

defaultDatabaseSettings.database = "db_net";
let network = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_words";
let wordsDB = mysql.createConnection(defaultDatabaseSettings);

defaultDatabaseSettings.database = "db_records";
let records = mysql.createConnection(defaultDatabaseSettings);

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
module.exports.obj = {
	"db_net": network,
	"db_words": wordsDB,
	"db_records": records
}