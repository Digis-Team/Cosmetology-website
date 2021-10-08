import React from 'react';
import {
    ReactCompareSlider,
    ReactCompareSliderImage
  } from 'react-compare-slider';
import { BEFORE_AFTER_PICTURES } from '../../constants';

  export const BeforeAfter = () => {
    return(
      <div className="before-after-smth">
        <div className="before-after-text line"></div>
        <h1 className="before-after-text">Before/After</h1>
        <div className="before-after-slider-parent">
          <div className="before-after-slider">
            <ReactCompareSlider className="before-after-photos"
              itemOne={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[0]} alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[1]} alt="Image two" />}
            />
            <div className="before-after-text">photo1</div>
          </div>
          <div className="before-after-slider">
            <ReactCompareSlider className="before-after-photos"
              itemOne={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[2]} alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[3]} alt="Image two" />}
            />
            <div className="before-after-text">photo2</div>
          </div>
          <div className="before-after-slider">
            <ReactCompareSlider className="before-after-photos"
              itemOne={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[4]} alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[5]} alt="Image two" />}
            />
            <div className="before-after-text">photo3</div>
          </div>
      </div>
    </div>
  )
}
  