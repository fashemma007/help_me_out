const Video = require('../models/video.model');

/**
 * User's endpoint controllers
 */
class VideoControllers {
  // GET USER PROFILE
  static async getAllVideos(req, res) {
    const page = req.query.page || 1; //
    const size = req.query.size || 3;
    const offset = (page - 1) * size;

    try {
      const videos = await Video.find().skip(offset).limit(size);
      return res.status(200).json({ videos });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = VideoControllers;
