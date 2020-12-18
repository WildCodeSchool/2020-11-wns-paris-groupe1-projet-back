import express from 'express';
import 'dotenv/config';

import mongoConnection from './config/db';
import { getApolloServer } from './server';

const main = async () => {
  try {
    const PORT = process.env.PORT || 4000;

    // Connect to MongoDB
    await mongoConnection(process.env.MONGODB_URI);

    // Express server
    const app = express();
    const server = await getApolloServer();

    server.applyMiddleware({ app, path: '/graphql' });

    // Connect server
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

main();
