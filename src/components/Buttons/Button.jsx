import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.node.isRequired,
};
