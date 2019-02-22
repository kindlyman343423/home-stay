const Router = require('express').Router();
const {test} = require('../controllers/test');

Router.get('/test', test);

module.exports = Router;