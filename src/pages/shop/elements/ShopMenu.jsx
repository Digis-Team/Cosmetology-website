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
        {SECTIONS.map((item) => {
          const { id, title } = item;
          return (
            <li role="presentation" key={id} className="items-list" onClick={() => checkSection(id)} onKeyDown={() => checkSection(id)}>{title}</li>
          );
        })}
      </ul>
      <a href="https://www.google.com/" className="cart">
        <span>
          <i className="fas fa-shopping-cart fa-3x " />
          {amountOfItems > 0 && <span>{amountOfItems}</span>}
        </span>
      </a>
    </div>
  );
};

ShopMenu.propTypes = {
  setCurrentSection: propTypes.func.isRequired,
  amountOfItems: propTypes.number.isRequired,
};
