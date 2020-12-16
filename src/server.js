import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import 'dotenv/config';

import mongoConnection from './config/db';

// Retrieve resolvers - typeDefs - models
import resolvers from './resolvers/index';
import typeDefs from './typedefs/index';
import models from './models/index';

// Connect to MongoDB
mongoConnection();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;

// Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models }),
});

server.applyMiddleware({ app, path: '/graphql' });

// Connect server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
