import React, { useState } from 'react';
import { SHOP_ITEMS, SECTIONS } from '../../constants';

export const Shop = () => {
  const [currentSection, setCurrentSection] = useState(SECTIONS[0].id);
  const [amountOfItems, setAmountOfItems] = useState();

  const sectionItems = SHOP_ITEMS.filter((el) => el.section === currentSection);
  const cartList = JSON.parse(localStorage.getItem('cartList')) === null ? [] : JSON.parse(localStorage.getItem('cartList'));

  const checkSection = (sectionId) => {
    setCurrentSection(sectionId);
  };
  const addItemToCart = (itemId) => {
    const newList = [...cartList, itemId];
    localStorage.setItem('cartList', JSON.stringify(newList));
    setAmountOfItems(newList.length);
  };
  return (
    <div className="shop-container">
      <div className="items-list-container">
        <ul className="items-list-parent">
          {SECTIONS.map((item) => (
            <li role="presentation" key={item.id} className="items-list" onClick={() => checkSection(item.id)} onKeyDown={() => checkSection(item.id)}>{item.title}</li>
          ))}
        </ul>
        <a href="https://www.google.com/" className="cart">
          <span>
            <i className="fas fa-shopping-cart fa-3x " />
            <span>{amountOfItems}</span>
          </span>
        </a>
      </div>
      <div className="items-container">
        {sectionItems.map((item) => (
          <div className="item-container" key={item.id}>
            <div className="item-img-container">
              <img className="item-img" src={item.img} alt={item.title} section={currentSection} />
            </div>
            <div className="item-desc-container">
              <span className="item-title">
                {item.title}
              </span>
              <span className="item-desc">
                {item.description}
              </span>
              <span className="item-price">
                {item.price}
              </span>
            </div>
            <button type="button" className="item-button" onClick={() => addItemToCart(item.id)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
