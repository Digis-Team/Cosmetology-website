import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SECTIONS } from '../../../constants';

export const ShopMenu = ({ setCurrentSection, amountOfItems }) => {
  const onClick = (id) => () => setCurrentSection(id);

  return (
    <div className="items-list-container">
      <ul className="items-list-parent">
        {SECTIONS.map(({ id, title }) => (
          <li role="presentation" key={id} className="items-list" onClick={onClick(id)} onKeyDown={onClick(id)}>{title}</li>
        ))}
      </ul>
      <Link to="/cart" className="cart">
        <span>
          <i className="fas fa-shopping-cart fa-3x " />
          {amountOfItems > 0 && <span>{amountOfItems}</span>}
        </span>
      </Link>
    </div>
  );
};

ShopMenu.propTypes = {
  setCurrentSection: propTypes.func.isRequired,
  amountOfItems: propTypes.number.isRequired,
};
