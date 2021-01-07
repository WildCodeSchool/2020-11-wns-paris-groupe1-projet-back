import { ApolloServer } from 'apollo-server-express';

import getUser from './context/index';

// Retrieve resolvers - typeDefs - models
import resolvers from './resolvers/index';
import typeDefs from './typedefs/index';
import models from './models/index';

// eslint-disable-next-line consistent-return
export const getApolloServer = async () => {
  try {
    return new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => {
        const token = req?.headers?.authorization;
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
