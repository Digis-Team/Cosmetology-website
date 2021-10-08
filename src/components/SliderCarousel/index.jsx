<<<<<<< HEAD
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { photos } from '../../constants';
import { slides } from '../../constants';

export const SliderCarousel = () => (
    <div className="slider-container">
      <div className="moto-parent">
        <p className="moto">Show your natural<br/> beauty to the world</p>
=======
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slides, CAROUSEL_INTERVAL, CAROUSEL_TRANSITION_TIME } from '../../constants';

export const SliderCarousel = () => (
    <div className="slider-carousel-slider-container">
      <div className="motto-parent">
        <p className="motto">Show your natural<br/> beauty to the world</p>
>>>>>>> d6205a7 (fixed carousel)
      </div>
      <Carousel showThumbs={false} showStatus={false} dynamicHeight
      autoPlay interval={CAROUSEL_INTERVAL} infiniteLoop transitionTime={CAROUSEL_TRANSITION_TIME} >
       {slides.map((item) =>{
         return(
          <div>
            <img alt={item.alt} src={item.src} />
            <p className="legend"><a className='link' href={item.href}>{item.value}</a></p>
          </div>
         )
       })}
      </Carousel>
    </div>
  );
