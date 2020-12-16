import files from './query/file';
import addFile from './mutation/add-file';
import signUp from './mutation/sign-up';

export default {
  Query: {
    files,
  },
  Mutation: {
    addFile,
    signUp,
  },
};
