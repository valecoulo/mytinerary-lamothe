const City = require('../models/City');

// const cities = [
//     {
//       id: 1,
//       city: "Bariloche",
//       country: "Argentina",
//       src: ("https://i.imgur.com/SOTwYfI.jpg"),
//     },
//     {
//       id: 2,
//       city: "London",
//       country: "England",
//       src: ("https://i.imgur.com/lusMvxE.jpg"),
//     },
//     {
//       id: 3,
//       city: "Roma",
//       country: "Italy",
//       src: ("https://i.imgur.com/6Y9qCku.jpg"),
//     },
//     {
//       id: 4,
//       city: "Paris",
//       country: "France",
//       src: ("https://i.imgur.com/e3Lxczx.jpg"),
//     },
//     {
//       id: 5,
//       city: "Bogota",
//       country: "Colombia",
//       src: ("https://i.imgur.com/iDrQ0N3.jpg"),
//     },
//     {
//       id: 6,
//       city: "Cancun",
//       country: "Mexico",
//       src: ("https://i.imgur.com/dJ6e9MS.jpg"),
//     },
//     {
//       id: 7,
//       city: "Madrid",
//       country: "Spain",
//       src: ("https://i.imgur.com/f7ENXtQ.jpg"),
//     },
//     {
//       id: 8,
//       city: "Cairo",
//       country: "Egipt",
//       src: ("https://i.imgur.com/hq4W22c.jpg"),
//     },
//     {
//       id: 9,
//       city: "New York",
//       country: "United States",
//       src: ("https://i.imgur.com/wwS9Htv.jpg"),
//     },
//     {
//       id: 10,
//       city: "Viena",
//       country: "Austria",
//       src: ("https://i.imgur.com/n5ALb3M.jpg"),
//     },
//     {
//       id: 11,
//       city: "Tokyo",
//       country: "Japan",
//       src: ("https://i.imgur.com/FXQwXg9.jpg"),
//     },
//     {
//       id: 12,
//       city: "Sidney",
//       country: "Australia",
//       src: ("https://i.imgur.com/tomMhu3.jpg"),
//     },
//     {
//       id: 13,
//       city: "Hong Kong",
//       country: "Japan",
//       src: ("./cities_images/hong_kong.jpeg"),
//     },
//     {
//       id: 14,
//       city: "Miami",
//       country: "United States",
//       src: ("https://i.imgur.com/Txs3sQG.jpg"),
//     },
//     {
//       id: 15,
//       city: "Rio de Janeiro",
//       country: "Brazil",
//       src: ("https://i.imgur.com/WGeunXR.jpg"),
//     },
//   ];

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
          console.log('entre a la city pa')
          console.log(req.params)
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
        modfiedCity: async(req, res) => {
        let id = req.params.id
        let city = req.body
        let actualizado
        console.log(city)
        try{
            actualizado = await City.findOneAndUpdate({_id:id},producto,{new:true})
            console.log(actualizado)
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
        }

  }

  module.exports = citiesController;
