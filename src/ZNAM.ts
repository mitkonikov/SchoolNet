import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { connectMySQL, connectLimiter } from './database/connection';
import { Initialize as Authentication } from './auth/authentication';
import { Connect as ZNAMController, contact, contribute } from './database/ZNAM';

async function main() {
    // Load the config files
    dotenv.config();

    // Create the Express and Apollo apps
    const app = express();

    // Set up the connection to MySQL
    let databases = await connectMySQL();
    let limiter = connectLimiter();

    // Passport Authentication
    let auth = Authentication(app, databases.db_net);

    // Connect the ZNAM Controller (TODO)
    ZNAMController(databases, limiter);

    let commonPath = path.join(__dirname, '../client/common');
    app.use('/client/common', express.static(commonPath));
    
    if (!process.env.ZNAM_OFF) {
        app.get('*', (req, res, next) => {
            express.static(path.join(__dirname, './../znam/build'), { fallthrough: false })(req, res, next);
        });
    } else {
        app.get('*', (req, res) => {
            res.send('Under Construction.');
        });
    }

    app.listen(process.env.PORT_ZNAM);
    console.log(`[ZNAM] Server started at port ${process.env.PORT_ZNAM}.`);
}

main();