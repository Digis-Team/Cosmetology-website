import React from 'react';
import propTypes from 'prop-types';
import { SECTIONS } from '../../../constants';

export const ShopMenu = ({ setCurrentSection, amountOfItems }) => {
  const checkSection = (sectionId) => {
    setCurrentSection(sectionId);
  };
  return (
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
  );
};
ShopMenu.propTypes = {
  setCurrentSection: propTypes.func.isRequired,
  amountOfItems: propTypes.number.isRequired,
};
