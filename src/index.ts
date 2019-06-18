import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";


import { RegisterResolver } from "./modules/user/Register";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  });

  
  const apolloServer = new ApolloServer({ 
    schema, 
  });

  const app = express();

  apolloServer.applyMiddleware({ app });

  const port = 4000

  app.listen(4000, () => {
    console.log(`server started on http://localhost:${port}/graphql`);
  });
};

main();