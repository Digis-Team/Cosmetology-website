import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  THANK_YOU_TITLE, CONFIRM_EMAIL, GOOD_EMAIL_TITLE, BAD_EMAIL_TITLE,
} from '../../../constants';

export const ConfirmationOrder = () => {
  const [message, setMessage] = useState('');
  const [isEmailInValid, setIsEmailInValid] = useState(true);

  const emailRegex = /\S+@\S+\.\S+/;

  const onChange = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setMessage(GOOD_EMAIL_TITLE);
      setIsEmailInValid(false);
    } else {
      setMessage(BAD_EMAIL_TITLE);
      setIsEmailInValid(true);
    }
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation">
        <h1 className="headline">{THANK_YOU_TITLE}</h1>
        <input
          className="email"
          type="email"
          required
          placeholder="name.username@gmail.com"
          onChange={onChange}
        />
        <div>{message}</div>
        <Link to="/" className={`cart-button return ${!isEmailInValid ? 'disabled-link' : ''}`}>{CONFIRM_EMAIL}</Link>
      </div>
    </div>
  );
};
