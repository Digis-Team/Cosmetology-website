import React from 'react';

export const Results = (props) => {
  const points = props;
  return (
    <div className="result-container">
      <div className="results">
        <h1>RESULTS</h1>
        <h1>
          {points.points}
        </h1>
        <div>
          <div>4-6           7-9           10-12</div>
          <div>DRY       NORMAL       OIL</div>
        </div>
      </div>
    </div>
  );
};
