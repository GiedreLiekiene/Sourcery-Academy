import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './About';
import Home from './Home';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
