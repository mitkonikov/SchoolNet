import "reflect-metadata";
import { getConnectionOrCreate, connectMongo } from "./database/connection";
import express from "express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server-express";

import dotenv from 'dotenv';
import { MongoClient } from "typeorm";

async function entry() {
    let connection = await connectMongo() as MongoClient;

    // This is the way we are going to implement MongoDB CRUD for individual games.
    let play = connection.db('play');
    play.collection('rightspot').find().toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        connection.close();
    });
}

async function main() {
    dotenv.config();

    await getConnectionOrCreate("default");
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    const apolloServer = new ApolloServer({ schema });
    const app = express();

    apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // app.listen(process.env.PORT);
    console.log(`GraphQL server started at port ${process.env.PORT}.`);
}

// main();
entry();