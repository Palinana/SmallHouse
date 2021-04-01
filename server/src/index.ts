require("dotenv").config();

import express, { Application } from 'express';
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from './database/index';
import {typeDefs, resolvers} from './graphql'

const port = process.env.PORT;
console.log('process.env.PORT ', process.env.PORT);
const mount = async (app: Application) => {
    //connect to ds
    const db = await connectDatabase();

    //called with every request, all resolvers will have access to the Database
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ db })
    });
    server.applyMiddleware({ app, path: "/api" });
    
    app.listen(port, () => console.log(`Mixing it up on port ${port}`))

    const listings = await db.listings.find({}).toArray();
    console.log(listings);
}

mount(express());
