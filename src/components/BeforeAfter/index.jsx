import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
  } from 'react-compare-slider';
import { BEFORE_AFTER_PICTURES } from '../../constants';

export const BeforeAfter = () => {
  return(
    <div className="before-after-smth">
      <div className="before-after-text line" />
      <h1 className="before-after-text">Before/After</h1>
      <div className="before-after-slider-parent">
        {BEFORE_AFTER_PICTURES.map((item) => {
          return(
            <div className="before-after-slider">
                <ReactCompareSlider className="before-after-photos"
                  itemOne={<ReactCompareSliderImage src={item.before} alt="before" />}
                  itemTwo={<ReactCompareSliderImage src={item.after} alt="after" />}
                />
                <div className="before-after-text">{item.text}</div>
            </div>
          )
        })}
        {/* <div className="before-after-slider">
          <ReactCompareSlider className="before-after-photos"
            itemOne={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[0]} alt="before" />}
            itemTwo={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[1]} alt="after" />}
          />
          <div className="before-after-text">Home care</div>
        </div>
        <div className="before-after-slider">
          <ReactCompareSlider className="before-after-photos"
            itemOne={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[2]} alt="before" />}
            itemTwo={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[3]} alt="after" />}
          />
          <div className="before-after-text">Conical plastic</div>
        </div>
        <div className="before-after-slider">
          <ReactCompareSlider className="before-after-photos"
            itemOne={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[4]} alt="before" />}
            itemTwo={<ReactCompareSliderImage src={BEFORE_AFTER_PICTURES[5]} alt="after" />}
          />
          <div className="before-after-text">Home care</div>
        </div> */}
    </div>
  </div>
  )
}
  