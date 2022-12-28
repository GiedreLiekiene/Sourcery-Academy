import React from 'react';
import './box-shadow.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxShadow = ({ children, theme = 'primary' }) => {
  const boxClass = classNames('box-shadow', `box-shadow--${theme}`);
  return <div className={boxClass}>{children}</div>;
};

BoxShadow.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default BoxShadow;
