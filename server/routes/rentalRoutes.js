const Router = require('express').Router();
const rentalController = require('../controllers/rentalController');
const {authMiddleware} =  require('../controllers/userController');

//Rental Route
Router.get('/',  rentalController.getAllRentals);
Router.get('/:id', rentalController.getRentalById);

module.exports = Router;