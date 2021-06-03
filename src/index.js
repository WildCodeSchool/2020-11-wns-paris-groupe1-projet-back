import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';

import mongoConnection from './config/mongoConnection.js';
import { getApolloServer } from './server.js';

dotenv.config();

const main = async () => {
  try {
    const PORT = process.env.PORT || 4000;

    // Connect to MongoDB
    await mongoConnection(process.env.MONGODB_URI);

    // Express server
    const app = express();
    // Permet CORS
    app.use(cors());
    // Configure en-têtes HTTP
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );
    // Empêche les attaques cross-site scripting (xss)
    app.use(xss());
    // Limite le nombre de requête
    const limiter = rateLimit({
      windowMs: 10 * 60 * 1000, // 10 mins
      max: 100,
    });
    app.use(limiter);
    // Empêche la pollution des paramètres http
    app.use(hpp());

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
