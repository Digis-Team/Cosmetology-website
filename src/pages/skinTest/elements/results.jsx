import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GO_TO_SHOP_TITLE } from '../../../constants';

export const Results = ({ points, link }) => (
  <div className="result-container">
    <div className="results">
      <h1>RESULTS</h1>
      <h1>
        { points }
      </h1>
      <div className="explanation-container">
        <div className="res-points-container">
          <div className="res-points">4-6</div>
          <div className="res-points">7-9</div>
          <div className="res-points">10-12</div>
        </div>
        <div className="res-explanation-container">
          <div className="res-explanation">DRY</div>
          <div className="res-explanation">NORMAL</div>
          <div className="res-explanation">OIL</div>
        </div>
      </div>
      <Link className="cart-button return" to={link}>{GO_TO_SHOP_TITLE}</Link>
    </div>
  </div>
);

Results.propTypes = {
  points: propTypes.number.isRequired,
  link: propTypes.string.isRequired,
};
