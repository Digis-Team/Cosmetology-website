import React, { useState } from 'react';
import { SHOP_ITEMS, SECTIONS } from '../../constants';

export const Shop = () => {
  const [currentsection, setSection] = useState(1);
  const SHOP_ITEMS1 = SHOP_ITEMS.filter((el) => el.section === currentsection);
  const checkSection = (sectionId) => {
    setSection(sectionId);
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
          <i className="fas fa-shopping-cart fa-3x " />
        </a>
      </div>
      <div className="items-container">
        {SHOP_ITEMS1.map((item) => (
          <div className="item-container" key={item.id}>
            <div className="item-img-container">
              <img className="item-img" src={item.img} alt={item.title} section={currentsection} />
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
            <button type="button" className="item-button">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
