import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { photos } from '../../constants';
import { slides } from '../../constants';

export const SliderCarousel = () => (
    <div className="slider-container">
      <div className="moto-parent">
        <p className="moto">Show your natural<br/> beauty to the world</p>
      </div>
      <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} 
      autoPlay={true} interval={3000} infiniteLoop={true} transitionTime={500} >
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
