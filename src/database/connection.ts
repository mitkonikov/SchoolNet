import { Connection, getConnection, createConnection } from 'typeorm';

export const getConnectionOrCreate = async (name: string) => {
    let c: Connection;
    try {
        c = getConnection(name);
    } catch (err) {
        c = await createConnection(name);
    }
    return c;
}