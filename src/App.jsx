import React from 'react';
import { Home } from './pages';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
