import React from 'react';   
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import 'swiper/modules/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])


const CarouselCities = (props) => {
  console.log(props.cities)
  const cities = props.cities
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
        >
          {cities.map((city) => {
           return <SwiperSlide className="slide swip-slid">
            {city.map((data) => {
              return (
                <div className="slide-content">
                  <div className="user-image" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} >
                    <h3 className="text-light h3-city">{data.city}</h3>  
                  </div>  
                </div>
              );
            })}
          </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselCities 