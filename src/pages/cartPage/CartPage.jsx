import React from 'react';

export const CartPage = () => (
  <div className="cartlist-container">
    <h1 className="zagolovok">Корзина</h1>
    <div className="cart-items-container">
      <div className="cart-item">
        <img className="cart-img" src="https://u.makeup.com.ua/4/4x/4xp1kvrcf1ib.jpg" alt="item" />
        <div className="item-description">
          <h3 className="item-name">Антиоксидантна сироватка з ліпідним вітаміном С</h3>
          <div className="price-amount">
            <div className="price">Price: 100$</div>
            <div className="amount">- 7 +</div>
            <button className="cart-button delete-item" type="button">Видалити товар</button>
          </div>
        </div>
      </div>
      <div className="cart-item">
        <img className="cart-img" src="https://u.makeup.com.ua/4/4x/4xp1kvrcf1ib.jpg" alt="item" />
        <div className="item-description">
          <h3 className="item-name">Антиоксидантна сироватка з ліпідним вітаміном С</h3>
          <div className="price-amount">
            <div className="price">Price: 100$</div>
            <div className="amount">- 7 +</div>
            <button className="cart-button delete-item" type="button">Видалити товар</button>
          </div>
        </div>
      </div>
      <div className="cart-item">
        <img className="cart-img" src="https://u.makeup.com.ua/4/4x/4xp1kvrcf1ib.jpg" alt="item" />
        <div className="item-description">
          <h3 className="item-name">Антиоксидантна сироватка з ліпідним вітаміном С</h3>
          <div className="price-amount">
            <div className="price">Price: 100$</div>
            <div className="amount">- 7 +</div>
            <button className="cart-button delete-item" type="button">Видалити товар</button>
          </div>
        </div>
      </div>
      <div className="cart-item">
        <img className="cart-img" src="https://u.makeup.com.ua/4/4x/4xp1kvrcf1ib.jpg" alt="item" />
        <div className="item-description">
          <h3 className="item-name">Антиоксидантна сироватка з ліпідним вітаміном С</h3>
          <div className="price-amount">
            <div className="price">Price: 100$</div>
            <div className="amount">- 7 +</div>
            <button className="cart-button delete-item" type="button">Видалити товар</button>
          </div>
        </div>
      </div>
      <div className="make-order">
        <button className="cart-button" type="button">Видалити все</button>
        <button className="cart-button" type="button">Створити замовлення</button>
      </div>
    </div>
  </div>
);
