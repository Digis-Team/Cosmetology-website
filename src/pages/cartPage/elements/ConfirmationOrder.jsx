import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { THANK_YOU_TITLE, CONFIRM_EMAIL } from '../../../constants';

export const ConfirmationOrder = () => {
  const [message, setMessage] = useState('');
  const [linkClass, setLinkClass] = useState('cart-button return disabled-link');

  const emailRegex = /\S+@\S+\.\S+/;

  const validation = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setMessage('Your email looks good!');
      setLinkClass('cart-button return');
    } else {
      setMessage('Please enter a valid email!');
    }
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation">
        <h1 className="headline">{THANK_YOU_TITLE}</h1>
        <input
          className="email"
          type="text"
          required
          placeholder="olia.valchak@gmail.com"
          onChange={validation}
        />
        <div>{message}</div>
        <Link to="/" className={linkClass}>{CONFIRM_EMAIL}</Link>
      </div>
    </div>
  );
};
