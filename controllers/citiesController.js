const City = require('../models/City');

    const citiesController = {
        allCities: async(req, res) => {
          let cities
        try{
           cities = await City.find()
            
        }catch(error){
            error = error
            console.error(error)
        }      

        res.json({ response: cities })
        },
        oneCity: async(req, res) => {
            let city
            const id = req.params.id        
            try{
                city = await City.findOne({_id:id})
            }catch(error){
                console.log(error)
            }
            res.json({response:city})
        },
        newCity: (req, res) => {
          
            const {cityName, country, image} = req.body
            
            new City({cityName, country, image}).save()
            .then(() => res.json({success: true}))
        },
        deleteCity: async (req, res) => {
          let city
          const id = req.params.id
          try {
            city = await City.findOneAndDelete({ _id: id })
          } catch(error) {
            console.log(error)
          }
          res.json({response: city})
        },
        modifiedCity: async(req, res) => {
        let id = req.params.id
        let city = req.body
        let actualizado
        console.log(city)
        try{
            actualizado = await City.findOneAndUpdate({_id:id},city,{new:true})
            console.log(actualizado)
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
        }

  }

  module.exports = citiesController;
