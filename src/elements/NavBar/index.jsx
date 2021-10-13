import React, { useState } from 'react';
import { MENU_ITEMS } from '../../constants';
import logo from '../../theme/assets/logo.png';

export const NavBar = () =>{
  const [isClicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!isClicked)
  }
  return(
    <nav className="navbar-items">
        <h1 className="navbar-logo"><i><img src={logo} alt="logo" className="logo" /></i>Dr. DariiaValchak</h1>
        <div className="menu-icon" onClick={handleClick}> 
          <i className={`fas ${isClicked ? 'fa-times' : 'fa-bars'}`} />
        </div>
        <ul className={`nav-menu ${isClicked ? 'active' : ''}`}>
          {MENU_ITEMS.map((item, index) => {
            return (
              <li key = {index}>
                <a className = {item.className} href = {item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
  )
}