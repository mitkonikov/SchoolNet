import "reflect-metadata";
import { getConnectionOrCreate } from "./database/connection";
import { ApolloServer } from "apollo-server";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/UserResolver";

async function main() {
    await getConnectionOrCreate("default");
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });
    const server = new ApolloServer({ schema });
    // await server.listen(4000);
    console.log("GraphQL server started at port 4000.");
}

main();