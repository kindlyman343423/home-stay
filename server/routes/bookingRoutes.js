const Router = require('express').Router();
const bookingController = require('../controllers/bookingController');

const {authMiddleware} = require('../controllers/userController')

Router.post("/", authMiddleware, bookingController.PostBooking);

module.exports = Router;