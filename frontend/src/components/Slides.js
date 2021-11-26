import React from 'react';
import CarouselCities from './CarouselCities';


const Slides = () => {

    const cities = [
      [  {
        id: 1,
        city: "Bariloche",
        country: "Argentina",
        src: require("../assets/argentina.jpeg").default,
      },
      {
        id: 2,
        city: "London",
        country: "England",
        src: require("../assets/london.jpeg").default,
      },
      {
        id: 3,
        city: "Roma",
        country: "Italy",
        src: require("../assets/roma.jpeg").default,
      },
      {
        id: 4,
        city: "Paris",
        country: "France",
        src: require("../assets/paris.jpeg").default,
      }]
      ,
      [{
        id: 5,
        city: "Bogota",
        country: "Colombia",
        src: require("../assets/bogota.jpeg").default,
      },
      {
        id: 6,
        city: "Cancun",
        country: "Mexico",
        src: require("../assets/cancun.jpeg").default,
      },
      {
        id: 7,
        city: "Madrid",
        country: "Spain",
        src: require("../assets/madrid.jpeg").default,
      },
      {
        id: 8,
        city: "Cairo",
        country: "Egipt",
        src: require("../assets/cairo.jpeg").default,
      }],
      [{
        id: 9,
        city: "New York",
        country: "United States",
        src: require("../assets/new_york.jpeg").default,
      },
      {
        id: 10,
        city: "Viena",
        country: "Austria",
        src: require("../assets/paris.jpeg").default,
      },
      {
        id: 11,
        city: "Tokyo",
        country: "Japan",
        src: require("../assets/tokio.jpeg").default,
      },
      {
        id: 12,
        city: "Sidney",
        country: "Australia",
        src: require("../assets/sidney.jpeg").default,
      }]
        
      ];

    return (
        <div>
            <CarouselCities cities={cities} />
        </div>
    )
}

export default Slides