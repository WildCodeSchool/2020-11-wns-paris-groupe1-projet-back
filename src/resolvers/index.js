import files from './query/file.js';
import addFile from './mutation/add-file.js';
import signUp from './mutation/sign-up.js';
import login from './query/login.js';
import userResponse from './user-response/user-response.js';

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
