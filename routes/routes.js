const Router = require('express').Router();
const citiesController = require('../controllers/citiesController');
const itinerariesController = require('../controllers/itinerariesController');
const usersController = require('../controllers/usersController');
const validator = require('../controllers/validator'); 
const passport = require('../config/passport');
const activitiesController = require('../controllers/activitiesController');

const {allCities, oneCity, newCity, deleteCity, modifiedCity} = citiesController

const { allItnieraries, oneItinerary, newItinerary, deleteItinerary, modifiedItinerary, getItineraryByCity, getAllComments,addNewComment, editComment, deleteComment, likeItinerary } = itinerariesController

const { newUser, signIn, verifyToken } = usersController; 

const { newActivity, getItineraryActivities } = activitiesController

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

// Comments Controller

Router.route('/itinerary/comments')
.post(itinerariesController.addNewComment)
.delete(itinerariesController.deleteComment)

Router.route('/itinerary/comments/:id')
.get(itinerariesController.getAllComments)
.put(itinerariesController.editComment)

// Auth controller

Router.route('/auth/signUp')
.post(validator, newUser)

Router.route('/auth/signIn')
.post(signIn)

// Token verification

Router.route('/verifytoken')
.get(passport.authenticate('jwt', {session:false}), verifyToken)

// Activity controller

Router.route('/activities')
.post(newActivity)

Router.route("/activities/:id")
.get(getItineraryActivities)

//  Likes controller

Router.route("/itineraries/like/:id")
.put(passport.authenticate('jwt', {session:false}), likeItinerary)


module.exports = Router;