import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  SHOP_ITEMS, SKIN_SECTIONS,
} from '../../../constants';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const ShopItems = ({ setAmountOfItems, currentSection }) => {
  const query = useQuery();
  const [currentSkinSection, setCurrentSkinSection] = useState(query.get('section') ? Number(query.get('section')) : SKIN_SECTIONS[0].id);
  const sectionProducts = SHOP_ITEMS.filter((product) => product.section === currentSection
  && product.skinSection === currentSkinSection);

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
      const newList = [...cartList, cartItem];
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
          amount,
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
                id, img, title, price, amount,
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
