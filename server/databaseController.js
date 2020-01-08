/**
 *  Database Controller Module:
 *  Used as an API to the database
 *  It's main goal is control access to the databases
 */

let databases;

let Connect = function(databases_connect) {
    databases = databases_connect;
}

let DB = function(database) {
    let currentDB = databases.obj[database];

    let query = function(table, where, callback) {
        currentDB.query(table, where, callback);
    }

    return {
        query
    };
}

module.exports.Connect = Connect;
module.exports.DB = DB;