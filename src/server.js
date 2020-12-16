import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import mongoConnection from './config/db';

import resolvers from './resolvers/index';
import typeDefs from './typedefs/index';
import models from './models/index';

mongoConnection();
const app = express();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models }),
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
