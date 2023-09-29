const { Router } = require('express');
const VideoControllers = require('../controllers/video.controllers');

const videoRoutes = Router();

videoRoutes.get('/:feId/all', VideoControllers.getAllVideos);
videoRoutes.post('/:feId/new', VideoControllers.createVideo);

module.exports = videoRoutes;
