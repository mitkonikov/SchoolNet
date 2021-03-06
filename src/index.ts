import "reflect-metadata";
import { getConnectionOrCreate, connectMongo } from "./database/connection";
import express, { Response } from "express";
import http from "http";
import socketio from 'socket.io';
import requestIp from 'request-ip';
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server-express";
import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';
import { MongoClient } from "typeorm";
import PlayEngine from "./play/main";
import { Initialize as Authentication } from './auth/authentication';
import GuestModule from './auth/guest';
import { main as SubApps } from './apps/main';
import { main as StaticExpress } from './apps/static';
import { IRequest, IContext, IConfig } from "./types";
import { Guest } from "./entity/network/Guest";
import { User } from "./entity/network/User";
import { deleteRedirect, siteRedirect } from "./auth/redirects";

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
        },

        playground: true,
        introspection: true
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
    if ((process.config as Partial<IConfig>).usePM2) {
        require('./deploy/pm2setup');
    }

    // Create the Express and Apollo apps
    const app = express();
    const server = http.createServer(app);
    const socket = socketio(server, {
        path: "/socket.io"
    });

    // Request Comes with Client's IP
    app.use(requestIp.mw());

    // Set up the connection to MySQL
    let network = await getConnectionOrCreate("default");

    const apolloServer = await apolloLaunch();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // Set up the connection to MongoDB
    const connection = await connectMongo(process.env.MONGO_URI) as MongoClient;
    let play = connection.db('play');

    // Guest Authentication
    const guestModule = new GuestModule(network);
    app.use(guestModule.getMiddleware());
    guestModule.attachTestEndpoint(app);

    const guestCount = await network.getRepository(Guest).count();
    console.log(`Guest Count: ${guestCount}`);

    // Passport Authentication
    let auth = Authentication(app, network);

    // Applications such as ZNAM and ZBOR
    if ((process.config as Partial<IConfig>).subApps) {
        await SubApps(app, socket, guestModule);
    }

    StaticExpress(app);

    // Require all the games
    let playDir = path.join(__dirname, '../play');
    // let playEngine = new PlayEngine(playDir, app, socket, play);

    // Main page
    let sendIndexPage = (res: Response<any>) => res.sendFile(path.join(__dirname, '../svelteframe/public/index.html'));

    app.get('/', async (req: IRequest, res) => {
        if (req.isAuthenticated()) {
            const user = await User.findOne({ ID: req.user.ID });
            if (user.Redirect != '') {
                res.redirect(siteRedirect[user.Redirect]);
                deleteRedirect(network, user.ID);
                return;
            }
        }

        sendIndexPage(res);
    });

    app.get('*', (req, res) => {
        if (!res.headersSent) {
            res.redirect('/');
        }
    });

    server.listen(process.env.PORT);
    console.log(`[SchoolNet] Server started at port ${process.env.PORT}.`);
}

main();