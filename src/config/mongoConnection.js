import mongoose from 'mongoose';

const mongoConnection = async (database) => {
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

export default mongoConnection;
