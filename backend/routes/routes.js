const Router = require('express').Router();
const citiesController = require('../controllers/citiesController');

const {allCities, oneCity, newCity, deleteCity} = citiesController


Router.route('/cities')
.get(allCities)
.post(newCity)

Router.route(`/city/:id`)
.get(oneCity)
.delete(deleteCity)

module.exports = Router;