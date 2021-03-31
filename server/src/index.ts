import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from './graphql/qraphql';

const app = express();
const PORT = process.env.PORT || 9000;
// import {listings} from './listings';

// const one: number = 2;
// const two: any = undefined;

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: "/api" });


// app.get('/', (_req, res) => {
//   return res.send('Hello World!');  
// });

// app.get('/listings', (_req, res) => {
//   return res.send(listings);  
// });

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))

