const mongoose = require('mongoose');

const connectDatabase = async () => {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not configured. Add it to your .env file.');
  }

  const connection = await mongoose.connect(MONGODB_URI);
  console.log(`MongoDB connected: ${connection.connection.host}`);
};

module.exports = connectDatabase;
