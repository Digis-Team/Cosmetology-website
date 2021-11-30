import React, { useState } from 'react';
import { Questions, Results } from './elements';

export const SkinTest = () => {
  const [points, setPoints] = useState(0);
  let link = null;
  if (points < 7) {
    link = '/shop?section=1';
  } else if (points < 10) {
    link = '/shop?section=2';
  } else {
    link = '/shop?section=3';
  }
  // points < 7 ? '/test?section=a' : points < 10 ? '/test?section=b' : '/test?section=c';
  return points === 0 ? <Questions setPoints={setPoints} />
    : <Results points={points} link={link} />;
};
