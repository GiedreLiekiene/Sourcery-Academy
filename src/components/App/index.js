import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';

export default function App() {
  return <Layout></Layout>;
}

App.propTypes = {
  prop: PropTypes.string,
};
