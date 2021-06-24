import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../../assets/scss/main.scss';


const Header = React.lazy(() => import('./Header'));
const Home = React.lazy(() => import('./PlanetFacts'));
const SideDrawer = React.lazy(() => import('../components/HeaderComponents/SideDrawer'));

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Router>
        <Header />
        <SideDrawer />

        <Switch>
          <Route path="/" exact>
            <Redirect to="/mercury/overview" />
          </Route>
          <Route path="/:planet/:specs" >
            <Home />
          </Route>
          <Route path="/mercury/overview" exact>
            <Home />
          </Route>
        </Switch>
      </Router >
    </Suspense>
  );
}

export default App;
