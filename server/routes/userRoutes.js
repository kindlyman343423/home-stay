const Router = require('express').Router();
const userController = require('../controllers/userController');

//User route
Router.post('/auth', userController.loginUser);
Router.post('/register', userController.registerUser);

module.exports = Router;