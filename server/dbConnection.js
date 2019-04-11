var mysql        = require('mysql');

console.log('\x1b[32m%s\x1b[0m', "MySQL required successfully!");

var connection = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  port     : process.env.DATABASE_PORT,
  host     : "localhost",
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASS,
  database : "db_net"
});

var wordsDB = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  port     : process.env.DATABASE_PORT,
  host     : "localhost",
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASS,
  database : "db_words"
});

var records = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  port     : process.env.DATABASE_PORT,
  host     : "localhost",
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASS,
  database : "db_records"
});

connection.connect(function(error) {
  if (!!error) {
      console.log(error);
  } else {
      console.log('\x1b[32m%s\x1b[0m', "Successfully connected to the world database!");
  }
});

wordsDB.connect(function(error) {
  if (!!error) {
      console.log(error);
  } else {
      console.log('\x1b[32m%s\x1b[0m', "Successfully connected to the words database!");
  }
});

records.connect(function(error) {
  if (!!error) {
      console.log(error);
  } else {
      console.log('\x1b[32m%s\x1b[0m', "Successfully connected to the records database!");
  }
});

module.exports.mySQL = mysql;
module.exports.connection = connection;
module.exports.wordsDB = wordsDB;
module.exports.records = records;