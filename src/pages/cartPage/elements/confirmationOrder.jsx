import React from 'react';
import { Link } from 'react-router-dom';
import { THANK_YOU_TITLE, RETURN_TO_MAIN_TITLE } from '../../../constants';

export const ConfirmationOrder = () => (
  <div className="confirmation-container">
    <div className="confirmation">
      <h1 className="headline">{THANK_YOU_TITLE}</h1>
      <Link to="/" className="cart-button return">{RETURN_TO_MAIN_TITLE}</Link>
    </div>
  </div>
);
