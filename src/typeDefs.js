import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type File {
    title: String
    description: String
    category: String
    url: String
    datetime: String
  }

  input InputFile {
    title: String
    description: String
    category: String
    url: String
  }

  type Query {
    files: [File]
  }
  type Mutation {
    addFile(file: InputFile): File
  }
`;

export default typeDefs;
