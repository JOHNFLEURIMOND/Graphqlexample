import Homepage from './Homepage/Homepage';
import React from 'react';
import 'cross-fetch/polyfill';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Homepage} />
    </Switch>
  </Router>
);

export default App;

