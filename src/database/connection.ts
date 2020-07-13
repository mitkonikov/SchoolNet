import { Connection, getConnection, createConnection } from 'typeorm';
import { MongoClient } from 'mongodb';
import { IDatabases } from '../types';

const uri = 'mongodb://127.0.0.1:27017/?readPreference=primary&ssl=false';

export const getConnectionOrCreate = async (name: string) => {
    let c: Connection;
    try {
        c = getConnection(name);
    } catch (err) {
        c = await createConnection(name);
    }
    return c;
}

export const connectMongo = () => {
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
const MySQLWrapper = (orm) => {
    return {
        query: (q: string, callback: Function) => {
            orm.query(q).then((val) => callback(null, val));
        }
    }
}

export const connectMySQL = async () => {
    // MySQL Database Connections
    let networkORM = await getConnectionOrCreate("default");
    let zborORM = await getConnectionOrCreate("zbor");
    let znamORM = await getConnectionOrCreate("znam");
    let recordsORM = await getConnectionOrCreate("records");

    return {
        db_net: MySQLWrapper(networkORM),
        db_words: MySQLWrapper(zborORM),
        db_records: MySQLWrapper(recordsORM),
        db_znam: MySQLWrapper(znamORM)
    } as IDatabases
}