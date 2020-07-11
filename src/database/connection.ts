import { Connection, getConnection, createConnection } from 'typeorm';
import { MongoClient } from 'mongodb';

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