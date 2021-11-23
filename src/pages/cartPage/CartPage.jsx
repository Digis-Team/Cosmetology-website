import React from 'react';
import {
  CART, DELETE_ITEM, DELETE_ALL_ITEMS, MAKE_ORDER,
} from '../../constants';

export const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartList'));

  return (
    <div className="cartlist-container">
      <h1 className="headine">{CART}</h1>
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
                  <button className="cart-button" type="button">-</button>
                  <span className="amount">1</span>
                  <button className="cart-button" type="button">+</button>
                </div>
                <button className="cart-button delete-item" type="button">{DELETE_ITEM}</button>
              </div>
            </div>
          </div>
        ))}
        <div className="make-order">
          <button className="cart-button" type="button">{DELETE_ALL_ITEMS}</button>
          <button className="cart-button" type="button">{MAKE_ORDER}</button>
        </div>
      </div>
    </div>
  );
};
