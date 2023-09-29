/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      ref: 'User',
      required: false,
    },
    feId: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      unique: true,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
