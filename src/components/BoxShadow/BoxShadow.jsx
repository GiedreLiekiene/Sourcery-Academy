import React, { useContext } from 'react';
import './box-shadow.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

const BoxShadow = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const boxClass = classNames('box-shadow', `box-shadow--${theme}`);
  return <div className={boxClass}>{children}</div>;
};

BoxShadow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxShadow;
