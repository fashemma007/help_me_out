const { Router } = require('express');
const VideoControllers = require('../controllers/video.controllers');

const videoRoutes = Router();

videoRoutes.get('/', VideoControllers.getAllVideos);

module.exports = videoRoutes;
