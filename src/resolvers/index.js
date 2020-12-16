import files from './query/file';
import addFile from './mutation/add-file';
import signUp from './mutation/sign-up';
import login from './query/login';

export default {
  Query: {
    files,
    login,
  },
  Mutation: {
    addFile,
    signUp,
  },
};
