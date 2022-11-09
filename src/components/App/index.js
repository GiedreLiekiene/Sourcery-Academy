import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const cn = classNames.bind(styles);

export default function App({ prop }) {
  const charCount = prop.length;

  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
