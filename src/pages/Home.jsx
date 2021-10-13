import React from 'react';
import { SliderCarousel, BeforeAfter, AboutMe } from '../components';

export const Home = ()=> {
	return(
		<div>
			<SliderCarousel />
			<BeforeAfter />
			<AboutMe />
		</div>
	)
}
