const Router = require('express').Router();
const citiesController = require('../controllers/citiesController');
const itinerariesController = require('../controllers/itinerariesController');

const {allCities, oneCity, newCity, deleteCity, modifiedCity} = citiesController

const { allItnieraries, oneItinerary, newItinerary, deleteItinerary, modifiedItinerary, getItineraryByCity } = itinerariesController

// Cities Controller

Router.route('/cities')
.get(allCities)
.post(newCity)

Router.route(`/city/:id`)
.get(oneCity)
.delete(deleteCity)
.put(modifiedCity)

// Itiraneries Controller

Router.route('/itineraries')
.get(allItnieraries)
.post(newItinerary)

Router.route('/itineraries/:id')
.get(oneItinerary)
.delete(deleteItinerary)
.put(modifiedItinerary)

Router.route('/itinerarycity/:id')
  .get(getItineraryByCity)

module.exports = Router;