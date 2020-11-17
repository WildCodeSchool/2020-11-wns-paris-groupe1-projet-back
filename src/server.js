import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [{ title: 'test' }];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is listening at ${url}`));
