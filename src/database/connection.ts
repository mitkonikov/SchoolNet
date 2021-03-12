import { Connection, getConnection, createConnection } from 'typeorm';
import { MongoClient } from 'mongodb';
import mysql from 'mysql';
import { IDatabases } from '../types';

export const getConnectionOrCreate = async (name: string) => {
    let c: Connection;
    try {
        c = getConnection(name);
    } catch (err) {
        c = await createConnection(name);
    }
    return c;
}

export const connectMongo = (uri: string) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(uri, {
            useUnifiedTopology: true
        }, (err, con) => {
            if (err) {
                console.log(err);
                resolve(null);
                return;
            }

            resolve(con);
        });
    });
}

/**
 * This is temporary wrapper for the legacy support
 * @param orm 
 */
const MySQLWrapper = (orm: Connection) => {
    return {
        query: (q: string, callback: Function) => {
            orm.query(q).then((val) => callback(null, val));
        }
    }
}

const onConnect = (database_name: string, error: string) => {
    if (!!error) console.log(error);
    else
        console.log(
            "Successfully connected to the " + database_name + " database!"
        );
}

export const connectMySQL = async () => {
    let defaultDatabaseSettings = {
        supportBigNumbers: true,
        bigNumberStrings: true,
        port: process.env.DATABASE_PORT,
        host: "localhost",
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: "db_net"
    };

    // MySQL Database Connections
    defaultDatabaseSettings.database = "db_net";
    let network = mysql.createConnection(defaultDatabaseSettings);
    
    defaultDatabaseSettings.database = "db_words";
    let wordsDB = mysql.createConnection(defaultDatabaseSettings);

    defaultDatabaseSettings.database = "db_records";
    let records = mysql.createConnection(defaultDatabaseSettings);

    defaultDatabaseSettings.database = "db_znam";
    let ZNAM = mysql.createConnection(defaultDatabaseSettings);

    network.connect((error) => onConnect("main", error));
    wordsDB.connect((error) => onConnect("words", error));
    records.connect((error) => onConnect("records", error));
    ZNAM.connect((error) => onConnect("ZNAM", error));

    return {
        db_net: network,
        db_words: wordsDB,
        db_records: records,
        db_znam: ZNAM
    } as IDatabases
}

export const connectLimiter = () => {
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

    return {
        opts,
        ready
    }
}