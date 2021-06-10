import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../../assets/scss/main.scss';

import Home from './PlanetFacts';
import SideDrawer from '../components/HeaderComponents/SideDrawer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideDrawer />

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
