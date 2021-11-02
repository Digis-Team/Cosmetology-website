import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants';
import logo from '../../theme/assets/logo.png';

export const NavBar = () => {
  const [isClicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!isClicked);
  };
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">
        <i><img src={logo} alt="logo" className="logo" /></i>
        Dr. DariiaValchak
      </h1>
      <div className="menu-icon" onClick={handleClick} onKeyDown={handleClick} aria-hidden="true">
        <i className={`fas ${isClicked ? 'fa-times' : 'fa-bars'}`} />
      </div>
      <ul className={`nav-menu ${isClicked ? 'active' : ''}`}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <Link className={item.className} to={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
