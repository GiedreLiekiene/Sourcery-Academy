import React, { useContext } from 'react';
import './button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeContext } from '~/utils/ThemeContext';

const Button = ({ type = 'submit', children, onClick }) => {
  const { theme } = useContext(ThemeContext);

  const buttonClass = classNames('button', `button--${theme}`);
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
