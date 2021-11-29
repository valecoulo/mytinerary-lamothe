const Router = require('express').Router();
const citiesController = require('../controllers/citiesController');

const {allCities, oneCity, newCity, deleteCity, modifiedCity} = citiesController


Router.route('/cities')
.get(allCities)
.post(newCity)

Router.route(`/city/:id`)
.get(oneCity)
.delete(deleteCity)
.put(modifiedCity)

module.exports = Router;