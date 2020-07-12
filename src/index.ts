import "reflect-metadata";
import { getConnectionOrCreate, connectMongo } from "./database/connection";
import express from "express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server-express";
import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';
import { MongoClient } from "typeorm";
import { initPlay } from "./play/main";

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
    dotenv.config();

    const app = express();

    // const apolloServer = await apolloLaunch();
    // apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // Set up the connection to MongoDB
    let connection = await connectMongo() as MongoClient;
    let play = connection.db('play');

    // Require all the games
    let playDir = path.join(__dirname, '../play');
    initPlay(playDir, app, play);

    // app.listen(process.env.PORT);
    console.log(`GraphQL server started at port ${process.env.PORT}.`);
}

main();