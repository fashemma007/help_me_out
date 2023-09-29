/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to mongoDB successfully');
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { connectDB };
