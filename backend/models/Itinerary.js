const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    authorName: {type: String, required: true},
    authorImg: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    city: { type: [{type: mongoose.Types.ObjectId, ref: 'city', required:true}] , required: true }
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary;