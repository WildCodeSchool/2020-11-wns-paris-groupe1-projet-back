import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import mongoConnection from './config/db';

import resolvers from './resolvers/index';
import typeDefs from './typedefs/index';
import File from './models/File';

mongoConnection();
const app = express();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models: { File } }),
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
