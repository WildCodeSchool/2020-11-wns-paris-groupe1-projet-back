import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import mongoConnection from './config/db';

import resolvers from './resolvers';
import typeDefs from './typeDefs';
import File from './models/File';

mongoConnection();
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models: { File } }),
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => {
  console.log('Server is running');
});
