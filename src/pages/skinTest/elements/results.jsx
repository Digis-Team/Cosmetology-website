import React from 'react';

export const Results = (props) => {
  const points = props;
  return (
    <div className={points.points === 0 ? 'hidden' : 'result-container'}>
      <div className="results">
        <h1>RESULTS</h1>
        <h1>
          { points.points }
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
      </div>
    </div>
  );
};
