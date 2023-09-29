const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
