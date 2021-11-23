import React, { useState } from 'react';

export const CartPage = () => {
  const [, setForceUpdate] = useState({});
  const cartList = JSON.parse(localStorage.getItem('cartList'));

  const changeAmount = (id, sign) => {
    const changedItemIndex = cartList.findIndex((item) => item.id === id);
    const changedItem = cartList[changedItemIndex];
    if (sign === '+') {
      changedItem.amount += 1;
    } else if (sign === '-') {
      changedItem.amount -= 1;
    }
    localStorage.setItem('cartList', JSON.stringify(cartList));
    setForceUpdate({});
  };

  return (
    <div className="cartlist-container">
      <h1 className="zagolovok">Корзина</h1>
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
                  <span>Price: $</span>
                  {price}
                </div>
                <div className="amount-container">
                  <button className="cart-button" type="button" onClick={() => changeAmount(id, '-')}>-</button>
                  <span className="amount">{amount}</span>
                  <button className="cart-button" type="button" onClick={() => changeAmount(id, '+')}>+</button>
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
