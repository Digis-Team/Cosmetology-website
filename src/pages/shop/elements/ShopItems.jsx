import React from 'react';
import propTypes from 'prop-types';
import { SHOP_ITEMS } from '../../../constants';

export const ShopItems = ({ setAmountOfItems, currentSection }) => {
  const cartList = JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : [];
  const sectionProducts = SHOP_ITEMS.filter((product) => product.section === currentSection);

  const addItemToCart = (cartItem) => {
    const newList = [...cartList, cartItem];
    localStorage.setItem('cartList', JSON.stringify(newList));
    setAmountOfItems(newList.length);
  };

  return (
    <div className="items-container">
      {sectionProducts.map(({
        id,
        img,
        title,
        description,
        price,
      }) => (
        <div className="item-container" key={id}>
          <div className="item-img-container">
            <img className="item-img" src={img} alt={title} />
          </div>
          <div className="item-desc-container">
            <span className="item-title">
              {title}
            </span>
            <span className="item-desc">
              {description}
            </span>
            <span className="item-price">
              {price}
            </span>
          </div>
          <button
            type="button"
            className="item-button"
            onClick={() => addItemToCart({
              id, img, title, price,
            })}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

ShopItems.propTypes = {
  setAmountOfItems: propTypes.func.isRequired,
  currentSection: propTypes.number.isRequired,
};