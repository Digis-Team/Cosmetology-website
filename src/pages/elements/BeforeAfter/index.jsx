import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { BEFORE_AFTER_PICTURES } from '../../../constants';

export const BeforeAfter = () => (
  <div className="before-after-smth">
    <div className="before-after-text line" />
    <h1 className="before-after-text">Before/After</h1>
    <div className="before-after-slider-parent">
      {BEFORE_AFTER_PICTURES.map((item) => (
        <div className="before-after-slider">
          <ReactCompareSlider
            className="before-after-photos"
            itemOne={<ReactCompareSliderImage src={item.before} alt="before" />}
            itemTwo={<ReactCompareSliderImage src={item.after} alt="after" />}
          />
          <div className="before-after-text">{item.text}</div>
        </div>
      ))}
    </div>
  </div>
);
