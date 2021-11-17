import React, { useState } from 'react';
import { ShopMenu, ShopItems } from './elements';
import { SECTIONS } from '../../constants';

export const Shop = () => {
  const [currentSection, setCurrentSection] = useState(SECTIONS[0].id);
  const [amountOfItems, setAmountOfItems] = useState();

  return (
    <div className="shop-container">
      <ShopMenu setCurrentSection={setCurrentSection} amountOfItems={amountOfItems} />
      <ShopItems setAmountOfItems={setAmountOfItems} currentSection={currentSection} />
    </div>
  );
};
