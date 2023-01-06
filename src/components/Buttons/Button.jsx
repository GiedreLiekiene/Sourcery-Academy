import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ type = 'submit', children, onClick, theme = 'primary' }) => {
  const buttonClass = classNames('button', `button--${theme}`);
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
Button.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.node.isRequired,
};
