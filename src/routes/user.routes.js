const { Router } = require('express');
const UserControllers = require('../controllers/user.controllers');

const userRoutes = Router();

userRoutes.get('/', UserControllers.getUserProfile);

module.exports = userRoutes;
