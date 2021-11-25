import React from 'react';
import { Link } from 'react-router-dom';

export const ConfirmationOrder = () => (
  <div className="confirmation-container">
    <div className="confirmation">
      <h1 className="headline">Дякую за покупку!</h1>
      <Link to="/" className="cart-button return">Повернутись до головної сторінки</Link>
    </div>
  </div>
);
