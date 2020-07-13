import "reflect-metadata";
import { getConnectionOrCreate, connectMongo, connectMySQL } from "./database/connection";
import express from "express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server-express";
import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';
import { MongoClient } from "typeorm";
import { initPlay } from "./play/main";
import { Initialize as Authentication } from './auth/authentication';

async function apolloLaunch() {
    // Set up the connection to MySQL
    await getConnectionOrCreate("default");
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    // APOLLO SERVER and EXPRESS
    const apolloServer = new ApolloServer({ schema });

    return apolloServer;
}

async function main() {
    // Load the config files
    dotenv.config();

    process.config = {
        ...process.config,
        ...JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json')).toString())
    }

    // Create the Express and Apollo apps
    const app = express();

    // const apolloServer = await apolloLaunch();
    // apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // Set up the connection to MongoDB
    let connection = await connectMongo() as MongoClient;
    let play = connection.db('play');

    // Set up the connection to MySQL
    let databases = await connectMySQL();

    // Passport Authentication
    let auth = Authentication(app, databases.db_net);

    // Require all the games
    let playDir = path.join(__dirname, '../play');
    initPlay(playDir, app, play);

    app.listen(process.env.PORT);
    console.log(`GraphQL server started at port ${process.env.PORT}.`);
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