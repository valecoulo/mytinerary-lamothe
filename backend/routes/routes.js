const Router = require('express').Router();
const citiesController = require('../controllers/citiesController');

const {allCities, oneCity} = citiesController


Router.route('/cities')
.get(allCities)

Router.route(`/city/:id`)
.get(oneCity)

module.exports = Router;