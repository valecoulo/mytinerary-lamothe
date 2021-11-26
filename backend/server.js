const express = require('express');

const cities = [
    {
      id: 1,
      city: "Bariloche",
      country: "Argentina",
      src: ("./cities_images/argentina.jpeg"),
    },
    {
      id: 2,
      city: "London",
      country: "England",
      src: ("./cities_images/london.jpeg"),
    },
    {
      id: 3,
      city: "Roma",
      country: "Italy",
      src: ("./cities_images/roma.jpeg"),
    },
    {
      id: 4,
      city: "Paris",
      country: "France",
      src: ("./cities_images/paris.jpeg"),
    },
    {
      id: 5,
      city: "Bogota",
      country: "Colombia",
      src: ("./cities_images/bogota.jpeg"),
    },
    {
      id: 6,
      city: "Cancun",
      country: "Mexico",
      src: ("./cities_images/cancun.jpeg"),
    },
    {
      id: 7,
      city: "Madrid",
      country: "Spain",
      src: ("./cities_images/madrid.jpeg"),
    },
    {
      id: 8,
      city: "Cairo",
      country: "Egipt",
      src: ("./cities_images/cairo.jpeg"),
    },
    {
      id: 9,
      city: "New York",
      country: "United States",
      src: ("./cities_images/new_york.jpeg"),
    },
    {
      id: 10,
      city: "Viena",
      country: "Austria",
      src: ("./cities_images/paris.jpeg"),
    },
    {
      id: 11,
      city: "Tokyo",
      country: "Japan",
      src: ("./cities_images/tokio.jpeg"),
    },
    {
      id: 12,
      city: "Sidney",
      country: "Australia",
      src: ("./cities_images/sidney.jpeg"),
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
      src: ("./cities_images/miami.jpeg"),
    },
    {
      id: 15,
      city: "São Paulo",
      country: "Brazil",
      src: ("./cities_images/sao_paulo.jpeg"),
    },
  ];

const app = express();

const cors = require('cors');


app.use(cors());

const hey = 'ANASHEIIII'

app.get('/pruebas/datos', (req, res) => {
    console.log(`me llego esto : ${hey}`)
    res.send(hey)
})

app.get('/api/cities', (req, res) => {
    res.json({response: {cities}})
})



app.listen(4000, () => console.log("corriendo en el puerto 4000"));
