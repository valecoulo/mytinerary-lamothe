const Activity = require("../models/Activity")

const activitiesControllers = {
    newActivity: async (req, res) => {
        let newActivity = await Activity({...req.body})
        try {
            await newActivity.save()
            res.json({success: true})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }, 
    retrieveActivitiesOfOneItinerary: async (req, res) => {
        try {
            let itineraryActivities = await Activity.find({itinerary: req.params.id}).populate('itineraryId')
            console.log("controladorAcitivity:",itineraryActivities);
            res.json({success: true, response: itineraryActivities})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }
}

module.exports = activitiesControllers