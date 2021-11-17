import React from 'react';
import propTypes from 'prop-types';
import { SHOP_ITEMS } from '../../../constants';

export const ShopItems = ({ setAmountOfItems, currentSection }) => {
  const sectionItems = SHOP_ITEMS.filter((el) => el.section === currentSection);
  const cartList = JSON.parse(localStorage.getItem('cartList')) === null ? [] : JSON.parse(localStorage.getItem('cartList'));

  const addItemToCart = (itemId) => {
    const newList = [...cartList, itemId];
    localStorage.setItem('cartList', JSON.stringify(newList));
    setAmountOfItems(newList.length);
  };
  return (
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
  );
};
ShopItems.propTypes = {
  setAmountOfItems: propTypes.func.isRequired,
  currentSection: propTypes.number.isRequired,
};
