import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Layout from '../layout/Layout';

export default function App({ prop }) {
  const charCount = prop.length;

  return (
    <Router>
      <Navbar />
      <Layout>Content</Layout>
    </Router>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
