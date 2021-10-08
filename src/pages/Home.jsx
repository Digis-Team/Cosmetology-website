import React from 'react';
import { Navbar, SliderCarousel } from '../components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = ()=> {
    return(
        <div>
            <Navbar />
            <SliderCarousel />
        </div>
    )
}
