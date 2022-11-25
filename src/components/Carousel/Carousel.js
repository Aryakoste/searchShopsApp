import React from 'react';
import style from './Carousel.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/Images/1.jpg';
import Image2 from '../../assets/Images/2.jpg';
import Image3 from '../../assets/Images/3.JPG';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ICarousel = () => {
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Find Shops Efficiently</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Filter Your Search</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Add Shops</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default ICarousel;