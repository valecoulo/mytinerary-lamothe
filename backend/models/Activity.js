const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activityTitle: { type: String, required: true },
    activity: {type: String, required: true},
    src: { type: String, required: true },
    itineraryId: { type: mongoose.Types.ObjectId, ref: 'itinerary' }
})

const Activity = mongoose.model('activity', activitySchema );

module.exports = Activity;  