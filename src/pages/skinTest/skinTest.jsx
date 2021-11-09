import React, { useState } from 'react';
import { Questions, Results } from './elements';

export const SkinTest = () => {
  const [points, setPoints] = useState(0);
  const CheckRes = () => (points === 0
    ? <Questions setPoints={setPoints} /> : <Results points={points} />);
  return CheckRes();
  //   <div>
  //     <div>
  //     </div>
  //   </div>
  // );
};
