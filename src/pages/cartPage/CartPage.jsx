import React from 'react';

export const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartList'));
  const returnButton = (value) => <button className="cart-button" type="button">{value}</button>;

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
                  {returnButton('-')}
                  <span className="amount">1</span>
                  {returnButton('+')}
                </div>
                {returnButton('Видалити товар')}
              </div>
            </div>
          </div>
        ))}
        <div className="make-order">
          {returnButton('Видалити всу')}
          {returnButton('Створити замовлення')}
        </div>
      </div>
    </div>
  );
};
