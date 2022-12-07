import React from 'react';
import './box-shadow.scss';
import PropTypes from 'prop-types';

const BoxShadow = ({ className, children }) => {
  return <div className={'box-shadow ' + className}> {children} </div>;
};

BoxShadow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BoxShadow;
