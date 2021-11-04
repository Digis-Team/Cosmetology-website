import React, { useState } from 'react';
import { Questions, Results } from './elements';

export const SkinTest = () => {
  const [points, setPoints] = useState(0);
  return (
    <div>
      <div>
        <Questions setPoints={setPoints} />
        <Results points={points} />
      </div>
    </div>
  );
};
