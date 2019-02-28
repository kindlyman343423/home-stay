const Router = require('express').Router();
const rentalController = require('../controllers/rentalController');

//Rental Route
Router.get('/', rentalController.getAllRentals);
Router.get('/:id', rentalController.getRentalById);

module.exports = Router;