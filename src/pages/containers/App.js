import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../../assets/scss/main.scss';

import Home from './PlanetFacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:planet/:specs" >
            <Home />
          </Route>
          <Route path="/" render={() => {
            return (
              <Redirect to="/mercury/overview" />
            )
          }}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
