import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, SkinTest } from './pages';
import { NavBar } from './elements';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/test">
          <SkinTest />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
