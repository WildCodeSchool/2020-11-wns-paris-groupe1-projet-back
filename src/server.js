/* eslint-disable import/extensions */
import { ApolloServer } from 'apollo-server-express';

import getUser from './context/index.js';

// Retrieve resolvers - typeDefs - models
import resolvers from './resolvers/index.js';
import typeDefs from './typedefs/index.js';
import models from './models/index.js';

// eslint-disable-next-line consistent-return
export const getApolloServer = async () => {
  try {
    return new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => {
        let token = '';
        if (req && req.headers && req.headers.authorization) {
          token = req.headers.authorization;
        }
        if (token) {
          const { userId, userRole } = getUser(token);
          return { models, userId, userRole };
        }
        return { models };
      },
    });
  } catch (e) {
    console.log(e);
  }
};
