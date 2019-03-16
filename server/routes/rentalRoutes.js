const Router = require('express').Router();
const rentalController = require('../controllers/rentalController');
const {authMiddleware} =  require('../controllers/userController');

Router.get('/secret', authMiddleware, (req, res)=>{
 res.json("Sup secret")
})

//Rental Route
Router.get('/',  rentalController.getAllRentals);
Router.get('/:id', rentalController.getRentalById);

module.exports = Router;