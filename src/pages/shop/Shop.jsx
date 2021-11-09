import React from 'react';
import { SHOP_ITEMS } from '../../constants';

export const Shop = () => (
  <div className="shop-container">
    <div className="items-list-container">
      <ul className="items-list-parent">
        <li className="items-list">СИРОВАТКИ</li>
        <li className="items-list">ЗВОЛОЖЕННЯ</li>
        <li className="items-list">ПЕПТИДИ</li>
        <li className="items-list">СОНЦЕЗАХИСТ</li>
        <li className="items-list">ОЧИЩЕННЯ</li>
        <li className="items-list">ВІДЛУЩУВАННЯ</li>
        <li className="items-list">ТОНІКИ</li>
        <li className="items-list">МАСКИ</li>
      </ul>
      <a href="https://www.google.com/" className="cart">
        <i className="fas fa-shopping-cart fa-3x " />
      </a>
    </div>
    <div className="items-container">
      {SHOP_ITEMS.map((item) => (
        <div className="item-container">
          <div className="item-img-container">
            <img className="item-img" src={item.img} alt={item.title} />
          </div>
          <div className="item-desc-container">
            <span className="item-title">
              {item.title}
            </span>
            <span className="item-desc">
              {item.desc}
            </span>
            <span className="item-price">
              {item.price}
            </span>
          </div>
          <button type="button" className="item-button">
            {item.button}
          </button>
        </div>
      ))}
    </div>
  </div>
);
