import "reflect-metadata";
import { getConnectionOrCreate, connectMongo, connectMySQL } from "./database/connection";
import express from "express";
import requestIp from 'request-ip';
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server-express";
import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';
import { MongoClient } from "typeorm";
import { initPlay } from "./play/main";
import { Initialize as Authentication } from './auth/authentication';
import { Guest } from './auth/guest';
import { Connect as DBController, DB } from './database/controller';
import { main as SubApps } from './apps/main';
import { main as StaticExpress } from './apps/static';
import { IRequest } from "./types";

async function apolloLaunch() {
    // Set up the connection to MySQL
    await getConnectionOrCreate("default");
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    // APOLLO SERVER and EXPRESS
    const apolloServer = new ApolloServer({
        schema,
        context: ({ req }) => {
            // GraphQL Authentication
            let reqExpress = req as IRequest;
            return { user: reqExpress.user };
        }
    });

    return apolloServer;
}

async function main() {
    // Load the config files
    dotenv.config();

    process.config = {
        ...process.config,
        ...JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json')).toString())
    }

    // PM2 Connection  
    if ((process.config as any).usePM2) {
        require('./deploy/pm2setup');
    }

    // Create the Express and Apollo apps
    const app = express();

    // Request Comes with Client's IP
    app.use(requestIp.mw())

    // const apolloServer = await apolloLaunch();
    // apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // Set up the connection to MongoDB
    let connection = await connectMongo() as MongoClient;
    let play = connection.db('play');

    // Set up the connection to MySQL
    let databases = await connectMySQL();

    // The Main Controller Module for database access
    if ((process.config as any).databaseController) {
        DBController(databases);
    }

    // Passport Authentication
    let auth = Authentication(app, databases.db_net);

    // Guest Authentication
    if ((process.config as any).guest) {
        Guest({
            app,
            network: databases.db_net
        });
    }

    // Applications such as ZNAM and ZBOR
    if ((process.config as any).subApps) {
        SubApps(app);
    }

    StaticExpress(app);

    // Require all the games
    let playDir = path.join(__dirname, '../play');
    initPlay(playDir, app, play);

    // Main page
    app.get('/', (req: IRequest, res) => {
        if (req.isAuthenticated()) {
            databases.db_net.query("SELECT Redirect FROM tbl_students WHERE ID = ?", req.user.ID, (err, rows) => {
                if (rows[0].Redirect == "ZNAM") {
                    res.redirect("https:\/\/znam.schoolnet.mk/");
                } else {
                    // res.sendFile(__dirname + '/client/lobby/index.html');
                    res.redirect("https:\/\/znam.schoolnet.mk/");
                }
            });
        } else {
            res.sendFile(path.join(__dirname, '../client/index.html'));
        }
    });

    app.get('*', (req, res) => {
        res.redirect('/');
    });

    app.listen(process.env.PORT);
    console.log(`[SchoolNet] Server started at port ${process.env.PORT}.`);
}

(String as any).prototype.multiReplace = (array) => {
    let result = "";
    
    for (let c = 0; c < this.length; ++c) { // for every letter in the string
        let replaced = false;
        for (let r in array) { // check for replacements in the array
            if (this[c] == r) {
                result += array[r];
                replaced = true;
                break;
            }
        }

        if (!replaced) result += this[c];
    }

    return result;
}

main();