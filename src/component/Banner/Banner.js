import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from 'react-bootstrap';
import bike1 from '../../images/image1.jpg';
import bike2 from '../../images/image2.jpg';
import bike3 from '../../images/image3.jpg';

const Banner = () => {
    return (
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bike1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bike2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bike3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;