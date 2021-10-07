import React from "react";
import { Carousel } from "react-responsive-carousel";
// import photo from '../../theme/assets/photo1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { photos } from '../../constants';

export const SliderCarousel = () => (
  // centerMode={true} centerSlidePercentage={70}
    <div className='slider-container'>
      <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} 
      autoPlay={true} interval={2000} infiniteLoop={true} transitionTime={500} >
        <div> 
          <img alt="" src={photos[0]} />
          <p>blablabla</p>
          <p className="legend"><a className='link' href="#">ABOUT ME</a></p>
        </div>
        <div>
        <img alt="" src={photos[1]} />
          <p className="legend"><a className='link' href="#">CONTACTS</a></p>
        </div>
        <div>
        <img alt="" src={photos[2]} />
          <p className="legend"><a className='link' href="#">PROCEDURES</a></p>
        </div>
        <div>
        <img alt="" src={photos[3]} />
          <p className="legend"><a className='link' href="#">REVIEWS</a></p>
        </div>
        <div>
        <img alt="" src={photos[4]} />
          <p className="legend"><a className='link' href="#">SHOP</a></p>
        </div>
        
      </Carousel>
    </div>
  );
