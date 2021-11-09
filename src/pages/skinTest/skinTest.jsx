import React, { useState } from 'react';
import { Questions, Results } from './elements';

export const SkinTest = () => {
  const [points, setPoints] = useState(0);
  return points === 0 ? <Questions setPoints={setPoints} /> : <Results points={points} />;
};
