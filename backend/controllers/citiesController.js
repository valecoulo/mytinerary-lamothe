const cities = [
    {
      id: 1,
      city: "Bariloche",
      country: "Argentina",
      src: ("https://i.imgur.com/SOTwYfI.jpg"),
    },
    {
      id: 2,
      city: "London",
      country: "England",
      src: ("https://i.imgur.com/lusMvxE.jpg"),
    },
    {
      id: 3,
      city: "Roma",
      country: "Italy",
      src: ("https://i.imgur.com/6Y9qCku.jpg"),
    },
    {
      id: 4,
      city: "Paris",
      country: "France",
      src: ("https://i.imgur.com/e3Lxczx.jpg"),
    },
    {
      id: 5,
      city: "Bogota",
      country: "Colombia",
      src: ("https://i.imgur.com/iDrQ0N3.jpg"),
    },
    {
      id: 6,
      city: "Cancun",
      country: "Mexico",
      src: ("https://i.imgur.com/dJ6e9MS.jpg"),
    },
    {
      id: 7,
      city: "Madrid",
      country: "Spain",
      src: ("https://i.imgur.com/f7ENXtQ.jpg"),
    },
    {
      id: 8,
      city: "Cairo",
      country: "Egipt",
      src: ("https://i.imgur.com/hq4W22c.jpg"),
    },
    {
      id: 9,
      city: "New York",
      country: "United States",
      src: ("https://i.imgur.com/wwS9Htv.jpg"),
    },
    {
      id: 10,
      city: "Viena",
      country: "Austria",
      src: ("https://i.imgur.com/n5ALb3M.jpg"),
    },
    {
      id: 11,
      city: "Tokyo",
      country: "Japan",
      src: ("https://i.imgur.com/FXQwXg9.jpg"),
    },
    {
      id: 12,
      city: "Sidney",
      country: "Australia",
      src: ("https://i.imgur.com/tomMhu3.jpg"),
    },
    {
      id: 13,
      city: "Hong Kong",
      country: "Japan",
      src: ("./cities_images/hong_kong.jpeg"),
    },
    {
      id: 14,
      city: "Miami",
      country: "United States",
      src: ("https://i.imgur.com/Txs3sQG.jpg"),
    },
    {
      id: 15,
      city: "Rio de Janeiro",
      country: "Brazil",
      src: ("https://i.imgur.com/WGeunXR.jpg"),
    },
  ];

  const citiesController = {
        allCities: (req, res) => {
            res.json({response: cities})  
        },
        oneCity: (req, res) => {
          const id = req.params.id
          console.log(id)
          console.log('tipo de id:', typeof(id))
          const selectedCity = cities.find(city => city.id.toString() === id)
          console.log('CITY: ', selectedCity)
          res.json({response:selectedCity})
        }
  }

  module.exports = citiesController;
