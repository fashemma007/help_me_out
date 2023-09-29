/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  hashedpwd: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
