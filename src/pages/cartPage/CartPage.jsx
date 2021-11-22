import React from 'react';

export const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartList'));
  return (
    <div className="cartlist-container">
      <h1 className="zagolovok">Корзина</h1>
      <div className="cart-items-container">
        {cartItems.map((cartItem) => (
          <div className="cart-item" key={cartItem.id}>
            <img className="cart-img" src={cartItem.img} alt="item" />
            <div className="item-description">
              <h3 className="item-name">{cartItem.title}</h3>
              <div className="price-amount">
                <div className="price">
                  <span>Price: $</span>
                  {cartItem.price}
                </div>
                <div className="amount-container">
                  <button className="cart-button" type="button">-</button>
                  <span className="amount">1</span>
                  <button className="cart-button" type="button">+</button>
                </div>
                <button className="cart-button delete-item" type="button">Видалити товар</button>
              </div>
            </div>
          </div>
        ))}
        <div className="make-order">
          <button className="cart-button" type="button">Видалити все</button>
          <button className="cart-button" type="button">Створити замовлення</button>
        </div>
      </div>
    </div>
  );
};
