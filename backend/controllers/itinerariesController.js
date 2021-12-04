const Itinerary = require('../models/Itinerary');

const itinerariesController = {
    allItnieraries: async(req, res) => {
      let itinerary
    try{
       itinerary = await Itinerary.find().populate('city')
        
    }catch(error){
        error = error
        console.error(error)
    }      

    res.json({ response: itinerary })
    },
    oneItinerary: async(req, res) => {
      console.log('entre a la city pa')
      console.log(req.params)
        let itinerary
        const id = req.params.id        
        try{
            itinerary = await Itinerary.findOne({_id:id}).populate('city')
        }catch(error){
            console.log(error)
        }
        res.json({response:itinerary})
    },
    newItinerary: (req, res) => {
      
        const { authorName, authorImg, price, duration, city } = req.body
        
        new Itinerary({ authorName, authorImg, price , duration, city }).save()
        .then(() => res.json({success: true}))
    },
    deleteItinerary: async (req, res) => {
      let itinerary
      const id = req.params.id
      try {
        itinerary = await Itinerary.findOneAndDelete({ _id: id })
      } catch(error) {
        console.log(error)
      }
      res.json({response: itinerary})
    },
    modifiedItinerary: async(req, res) => {
    let id = req.params.id
    let itinerary = req.body
    let actualizado
    console.log(itinerary)
    try{
        actualizado = await Itinerary.findOneAndUpdate({_id:id},itinerary,{new:true})
        console.log(actualizado)
    }catch(error){
        console.log(error)
    }
    res.json({success:actualizado ? true : false})
    }
}


module.exports = itinerariesController;