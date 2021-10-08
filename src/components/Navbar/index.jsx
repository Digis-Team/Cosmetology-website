import React, { useState } from 'react';
import { MENU_ITEMS } from '../../constants';
import logo from '../../theme/assets/logo.png';

export const Navbar = () => {
    const [isClicked, setClicked] = useState(true);

    const handleClick = () => {
        setClicked(!isClicked)
    }

    return (
        <nav className="navbar-items">
            <h1 className="navbar-logo"><i><img src={logo} alt="logo" className="logo" /></i>Dr. DariiaValchak</h1>
            <div className="menu-icon" onClick={handleClick}> 
                <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
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
