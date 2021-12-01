import React, { useState } from 'react';
import { Questions, Results } from './elements';
import { QUESTIONS } from '../../constants';

export const SkinTest = () => {
  const [points, setPoints] = useState(0);

  const checkSectionFromPoins = () => {
    const minimumPoints = QUESTIONS.length;
    let link = null;
    if (points <= minimumPoints) {
      link = '/shop?section=1';
    } else if (points <= minimumPoints * 2) {
      link = '/shop?section=2';
    } else {
      link = '/shop?section=3';
    }
    return link;
  };
  const link = checkSectionFromPoins();
  return points === 0 ? <Questions setPoints={setPoints} />
    : <Results points={points} link={link} />;
};
