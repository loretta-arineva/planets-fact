import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../../assets/scss/main.scss';


const Header = React.lazy(() => import('./Header'));
const Home = React.lazy(() => import('./PlanetFacts'));
const SideDrawer = React.lazy(() => import('../components/HeaderComponents/SideDrawer'));

function App() {
  return (
    <Router>
      <Header />
      <SideDrawer />

      <Switch>
        <Route path="/" >
          <Redirect to="/mercury/overview" />
        </Route>
        <Route path="/:planet/:specs" >
          <Home />
        </Route>
        <Route path="/mercury/overview">
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
