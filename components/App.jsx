import Homepage from './Homepage/Homepage';
import React from 'react';
import 'cross-fetch/polyfill';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/Footer/Footer';

const Data = () => {
  <div>
    <Nav />
    <Homepage />
    <Footer />
  </div>;
};
const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Homepage} />
    </Switch>
  </Router>
);

export default App;
