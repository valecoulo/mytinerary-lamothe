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
    getItineraryActivities: (req, res) => {
        Activity.find({itineraryId: req.params.id}).populate('itineraryId')
        .then(activities => res.json({response:activities}))
        .catch(err => console.log(err))
    }
}

module.exports = activitiesControllers