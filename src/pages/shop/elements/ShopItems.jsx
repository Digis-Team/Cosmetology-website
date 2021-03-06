import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { api } from '../../../api';
import useQuery from '../../../hooks/useQuery';
import { SKIN_SECTIONS } from '../../../constants';

export const ShopItems = ({ setAmountOfItems, currentSection }) => {
  const query = useQuery();

  const [sectionProducts, setSectionProducts] = useState([]);
  const [currentSkinSection, setCurrentSkinSection] = useState(query.get('section') ? Number(query.get('section')) : SKIN_SECTIONS[0].id);

  useEffect(() => {
    api.getShopItems(`?section=${currentSection}&skinsection=${currentSkinSection}`)
      .then((result) => {
        setSectionProducts(result);
      });
  }, [currentSkinSection, currentSection]);

  const countAmount = (list) => {
    localStorage.setItem('cartList', JSON.stringify(list));
    const amount = list.reduce((sum, item) => sum + item.amount, 0);
    setAmountOfItems(amount);
  };
  const addItemToCart = (cartItem) => {
    const cartList = JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : [];
    const repeatedItemIndex = cartList.findIndex((item) => item.id === cartItem.id);
    const repeatedItem = cartList[repeatedItemIndex];
    if (repeatedItem) {
      repeatedItem.amount += 1;
      countAmount(cartList);
    } else {
      const newList = [...cartList, { ...cartItem, amount: 1 }];
      countAmount(newList);
    }
  };
  const onSkinSectionClick = (id) => () => setCurrentSkinSection(id);

  return (
    <div className="section-items-container">
      <div className="skin-sections-container">
        <ul className="skin-sections">
          {SKIN_SECTIONS.map(({ id, title }) => (
            <li role="presentation" className="skin-section" key={id} onClick={onSkinSectionClick(id)} onKeyDown={onSkinSectionClick(id)}>{title}</li>
          ))}
        </ul>
      </div>
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
    </div>
  );
};

ShopItems.propTypes = {
  setAmountOfItems: propTypes.func.isRequired,
  currentSection: propTypes.number.isRequired,
};
