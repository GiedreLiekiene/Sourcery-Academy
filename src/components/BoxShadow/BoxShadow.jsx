import React from 'react';
import './box-shadow.scss';
import PropTypes from 'prop-types';

const BoxShadow = ({ children }) => {
  return <div className="box-shadow">{children}</div>;
};

BoxShadow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxShadow;
