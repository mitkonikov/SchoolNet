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
import { GuestModule } from './auth/guest';
import { Connect as DBController, DB } from './database/controller';
import { main as SubApps } from './apps/main';
import { main as StaticExpress } from './apps/static';
import { IRequest, IContext } from "./types";
import { Guest } from "./entity/network/Guest";
import { User } from "./entity/network/User";
import { siteRedirect } from "./auth/redirects";

import { misc } from './misc/misc';

async function apolloLaunch() {
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    // APOLLO SERVER and EXPRESS
    const apolloServer = new ApolloServer({
        schema,
        context: ({ req }) => {
            // GraphQL Authentication
            let reqExpress = req as IRequest;
            return {
                user: reqExpress.user,
                guest: reqExpress.guest
            } as IContext;
        }
    });

    return apolloServer;
}

async function main() {
    // Load the config files
    dotenv.config();
    misc();

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

    // Set up the connection to MySQL
    let network = await getConnectionOrCreate("default");

    const apolloServer = await apolloLaunch();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // Set up the connection to MongoDB
    const connection = await connectMongo() as MongoClient;
    let play = connection.db('play');

    // Set up the connection to MySQL
    let databases = await connectMySQL();

    // The Main Controller Module for database access
    if ((process.config as any).databaseController) {
        DBController(databases);
    }

    // Passport Authentication
    let auth = Authentication(app, network);

    // Guest Authentication
    if ((process.config as any).guest) {
        GuestModule(app, network);
        const guestCount = await network.getRepository(Guest).count();
        console.log(`Guest Count: ${guestCount}`);
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
    app.get('/', async (req: IRequest, res) => {
        if (req.isAuthenticated()) {
            const user = await User.findOne({ ID: req.user.ID });
            if (user.Redirect == '') {
                res.redirect('/');
            } else {
                res.redirect(siteRedirect[user.Redirect]);
            }
        } else {
            res.sendFile(path.join(__dirname, '../client/index.html'));
        }
    });

    app.get('*', (req, res) => {
        if (!res.headersSent) {
            res.redirect('/');
        }
    });

    app.listen(process.env.PORT);
    console.log(`[SchoolNet] Server started at port ${process.env.PORT}.`);
}

main();