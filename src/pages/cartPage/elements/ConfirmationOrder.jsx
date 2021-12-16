import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../api';

import {
  THANK_YOU_TITLE, CONFIRM_EMAIL, GOOD_EMAIL_TITLE, BAD_EMAIL_TITLE,
} from '../../../constants';

export const ConfirmationOrder = () => {
  const [message, setMessage] = useState('');
  const [isEmailInValid, setIsEmailInValid] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const setOrderData = () => (
    api.postOrders(userEmail)
      .then((result) => console.log(result))
  );

  const onChange = (event) => {
    setUserEmail(event.target.value);
    if (emailRegex.test(userEmail)) {
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
        <Link to="/" onClick={setOrderData} className={`cart-button return ${isEmailInValid ? 'disabled-link' : ''}`}>{CONFIRM_EMAIL}</Link>
      </div>
    </div>
  );
};
