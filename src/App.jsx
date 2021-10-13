import React, { useState } from 'react';
import { Home } from './pages';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MENU_ITEMS } from '../src/constants';
import logo from '../src/theme/assets/logo.png';

function App() {
  const [isClicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!isClicked)
  }
  return (
    <Router><nav className="navbar-items">
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
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
