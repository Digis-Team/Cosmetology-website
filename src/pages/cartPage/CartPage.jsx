import React from 'react';
import { BUTTONS_NAMES } from '../../constants';

export const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartList'));

  return (
    <div className="cartlist-container">
      <h1 className="zagolovok">Корзина</h1>
      <div className="cart-items-container">
        {cartItems.map(({
          id, img, title, price,
        }) => (
          <div className="cart-item" key={id}>
            <img className="cart-img" src={img} alt="item" />
            <div className="item-description">
              <h3 className="item-name">{title}</h3>
              <div className="price-amount">
                <div className="price">
                  <span>Price: $</span>
                  {price}
                </div>
                <div className="amount-container">
                  <button className="cart-button" type="button">{BUTTONS_NAMES[0]}</button>
                  <span className="amount">1</span>
                  <button className="cart-button" type="button">{BUTTONS_NAMES[1]}</button>
                </div>
                <button className="cart-button delete-item" type="button">{BUTTONS_NAMES[2]}</button>
              </div>
            </div>
          </div>
        ))}
        <div className="make-order">
          <button className="cart-button" type="button">{BUTTONS_NAMES[3]}</button>
          <button className="cart-button" type="button">{BUTTONS_NAMES[4]}</button>
        </div>
      </div>
    </div>
  );
};
