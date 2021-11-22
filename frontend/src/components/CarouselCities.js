import React from 'react';   
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import 'swiper/modules/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const firstSlide = [
  {
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
  },
];

const secondSlide = [
  {
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
  },
];

const thirdSlide = [
  {
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
  },
];


const CarouselCities = () => {

  return (
    <div className="car-cont">
      <div className="carousel-container">
      <h2 className= "d-flex justify-content-center pt-3 text-white">Popular MYtineraries</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slide swip-slid">
            {firstSlide.map((data) => {
              return (
                <div className="slide-content">
                  <div className="user-image" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} >
                    <h3 className="text-light h3-city">{data.city}</h3>  
                  </div>  
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide className="slide swip-slid">
            {secondSlide.map((data) => {
              return (
                <div className="slide-content">
                  <div className="user-image" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}}>
                  <h3 className="text-light h3-city">{data.city}</h3>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide className="slide swip-slid">
            {thirdSlide.map((data) => {
              return (
                <div className="slide-content">
                  <div className="user-image" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}}>
                  <h3 className="text-light h3-city">{data.city}</h3>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselCities 