import React, { useState } from 'react';
import propTypes from 'prop-types';

import {
  CART_TITLE, DELETE_ITEM_TITLE, DELETE_ALL_ITEMS_TITLE, MAKE_ORDER_TITLE, PRICE_TITLE,
} from '../../../constants';

export const CartItems = ({ setIsConfirmed }) => {
  const [, setForceUpdate] = useState({});
  const cartList = JSON.parse(localStorage.getItem('cartList'));

  const changeAmount = (id, sign) => {
    const changedItemIndex = cartList.findIndex((item) => item.id === id);
    const changedItem = cartList[changedItemIndex];
    if (sign === 'plus') {
      changedItem.amount += 1;
    } else {
      changedItem.amount -= 1;
      if (changedItem.amount === 0) {
        cartList.splice(changedItemIndex, 1);
      }
    }
    localStorage.setItem('cartList', JSON.stringify(cartList));
    setForceUpdate({});
  };

  const deleteProduct = (id) => {
    const changedItemIndex = cartList.findIndex((item) => item.id === id);
    cartList.splice(changedItemIndex, 1);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    setForceUpdate({});
  };

  const deleteAllItems = () => {
    const emptyCart = [];
    localStorage.setItem('cartList', JSON.stringify(emptyCart));
    setForceUpdate({});
  };

  return (
    <div className="cartlist-container">
      <h1 className="headine">{CART_TITLE}</h1>
      <div className="cart-items-container">
        {cartList.map(({
          id, title, img, price, amount,
        }) => (
          <div className="cart-item" key={id}>
            <img className="cart-img" src={img} alt="item" />
            <div className="item-description">
              <h3 className="item-name">{title}</h3>
              <div className="price-amount">
                <div className="price">
                  <span>{PRICE_TITLE}</span>
                  {price}
                </div>
                <div className="amount-container">
                  <button className="cart-button" type="button" onClick={() => changeAmount(id, 'minus')}>-</button>
                  <span className="amount">{amount}</span>
                  <button className="cart-button" type="button" onClick={() => changeAmount(id, 'plus')}>+</button>
                </div>
                <button className="cart-button delete-item" type="button" onClick={() => deleteProduct(id)}>{DELETE_ITEM_TITLE}</button>
              </div>
            </div>
          </div>
        ))}
        <div className="make-order">
          <button className="cart-button" type="button" onClick={() => deleteAllItems()}>{DELETE_ALL_ITEMS_TITLE}</button>
          <button className="cart-button" type="button" onClick={() => setIsConfirmed(true)}>{MAKE_ORDER_TITLE}</button>
        </div>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  setIsConfirmed: propTypes.func.isRequired,
};
