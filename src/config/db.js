import mongoose from 'mongoose';

export const closeDatabase = async () => {
  try {
    await mongoose.connection.db.dropCollection('users', console.log(`collection 'users' has been dropped.`));
    await mongoose.connection.close();
  } catch (e) {
    console.log(e);
  }
};
