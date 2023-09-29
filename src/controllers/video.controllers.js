const Video = require('../models/video.model');

/**
 * User's endpoint controllers
 */
class VideoControllers {
  static async createVideo(req, res) {
    const { feId } = req.params;
    const {
      name, userId, url,
    } = req.body;
    try {
      const newVid = await Video.create({
        name, userId, url, feId,
      });
      return res
        .status(201)
        .json({ message: 'video is ready', newVid });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // GET ALL VIDEOS
  static async getAllVideos(req, res) {
    const { feId } = req.params;
    const page = req.query.page || 1;
    const size = req.query.size || 9;
    const offset = (page - 1) * size;

    try {
      const videos = await Video.find({ feId }).skip(offset).limit(size);
      return res.status(200).json({ page, size, videos });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = VideoControllers;
