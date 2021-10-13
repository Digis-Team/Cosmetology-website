import React from 'react';
import { Home } from './pages';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import{ NavBar } from './elements/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
