import React from 'react';
import style from './Carousel.module.css';
import Image1 from '../../assets/Images/1.jpg';
import Image2 from '../../assets/Images/2.jpg';
import Image3 from '../../assets/Images/3.JPG';

const ICarousel = () => {
    return (
          <div className={style.mainCarousel}>
            <img src={Image1} className={style.imgCarousel}/>
          </div>
    );
}

export default ICarousel;