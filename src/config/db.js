import mongoose from 'mongoose';

export default async (database) => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('DB Connected');
  } catch (e) {
    console.error(e);
  }
};

export const closeDatabase = async () => {
  try {
    await mongoose.connection.db.dropCollection('users', console.log(`collection 'users' has been dropped.`));
    await mongoose.connection.close();
  } catch (e) {
    console.log(e);
  }
};
