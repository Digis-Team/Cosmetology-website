import React, { useState } from 'react';
import { CartItems, ConfirmationOrder } from './elements';

export const CartPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return isConfirmed
    ? <ConfirmationOrder />
    : <CartItems setIsConfirmed={setIsConfirmed} />;
};
