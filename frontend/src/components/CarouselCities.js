import React from 'react'   
import {Carousel} from 'react-bootstrap'

const CarouselCities = () => {
    return (
        <div className="background_carousel container-fluid">
          <h2 className="d-flex justify-content-center text-white pt-5 pb-3">Popular MYtineraries<i class="fas fa-city icon2 ps-2"></i></h2>
  <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/roma.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/paris.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div>
        <img
          className="d-flex w-100"
          src="./assets/argentina.jpeg"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselCities 