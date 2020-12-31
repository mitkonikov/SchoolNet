import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import expressSanitizer from 'express-sanitizer';
import { connectMySQL, connectLimiter, getConnectionOrCreate } from './database/connection';
import { Initialize as Authentication } from './auth/authentication';
import { Connect as ZNAMController, contact, contribute } from './database/ZNAM';

import DBController from './database/controller';
import GameEngine from './apps/GameEngine';
import ZNAMGameLogic from './apps/ZNAM/GameLogic';
import { Initialize as QueryInitialize, Query } from './apps/ZNAM/Query';
import { Initialize as UpdateInitialize, Update } from './apps/ZNAM/Update';

async function main() {
    // Load the config files
    dotenv.config();

    // Create the Express and Apollo apps
    const app = express();

    // Express sanitizer for client input
    app.use(expressSanitizer());

    // Set up the connection to MySQL
    let databases = await connectMySQL();
    let limiter = connectLimiter();

    // Set up the connection to MySQL
    let network = await getConnectionOrCreate("default");

    // Passport Authentication
    let auth = Authentication(app, network);

    // Connect the ZNAM Controller (TODO)
    ZNAMController(databases, limiter);
    DBController.Connect(databases);

    // Game Engine and Logic
    GameEngine.buildGameEngine(DBController);
    ZNAMGameLogic.Initialize(databases, GameEngine);
    QueryInitialize(DBController, ZNAMController, ZNAMGameLogic);
    UpdateInitialize(DBController, ZNAMController, ZNAMGameLogic);

    if (!process.env.ZNAM_OFF) {
        // Query and Update APIs
        app.post('/query', Query);
        app.post('/update', Update);
        
        app.get('*', (req, res, next) => {
            express.static(path.join(__dirname, './../znam/build'), { fallthrough: true })(req, res, next);
        });

        // If the file is not found, just redirect to the home page
        app.get('*', (req, res) => {
            res.redirect('/');
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