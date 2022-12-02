// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
import {ApolloServer} from "@apollo/server";
import {typeDefs} from "./schema.js";
import {startStandaloneServer} from "@apollo/server/standalone";
import {addMocksToSchema} from "@graphql-tools/mock";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {resolvers} from "./resolvers.js";
import {mocks} from "./mocks.js";

const server = new ApolloServer({
    // addMocksToSchema accepts a schema instance and provides
    // mocked data for each field in the schema
    schema: addMocksToSchema({
        schema: makeExecutableSchema({typeDefs, resolvers}),
        mocks,
    }),
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);