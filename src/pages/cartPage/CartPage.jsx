import React from 'react';
import {
  CART_TITLE, DELETE_ITEM_TITLE, DELETE_ALL_ITEMS_TITLE, MAKE_ORDER_TITLE,
} from '../../constants';

export const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartList'));

  return (
    <div className="cartlist-container">
      <h1 className="headine">{CART_TITLE}</h1>
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
                <button className="cart-button delete-item" type="button">{DELETE_ITEM_TITLE}</button>
              </div>
            </div>
          </div>
        ))}
        <div className="make-order">
          <button className="cart-button" type="button">{DELETE_ALL_ITEMS_TITLE}</button>
          <button className="cart-button" type="button">{MAKE_ORDER_TITLE}</button>
        </div>
      </div>
    </div>
  );
};
