const mongoose = require('mongoose');

const mongoConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://odyssey2:odyssey2.0@cluster0.tezgx.mongodb.net/test2?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log('You are connected');
  } catch (e) {
    console.error(e);
  }
};

export default mongoConnection;
