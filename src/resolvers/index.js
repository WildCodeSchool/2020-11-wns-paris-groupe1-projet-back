import files from './query/file';
import addFile from './mutation/add-file';
import signUp from './mutation/sign-up';
import login from './query/login';
import userResponse from './user-response/user-response';

export default {
  UserResponse: userResponse,
  Query: {
    files,
    login,
  },
  Mutation: {
    addFile,
    signUp,
  },
};
