import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';
const Button = ({ type = 'button', children, handleClick }) => {
  return (
    <button type={type} className="button" onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.node.isRequired,
};
