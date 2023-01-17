import classNames from 'classnames';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/ThemeContext';
import './link.scss';

const CustomLink = ({ to, children }) => {
  const { theme } = useContext(ThemeContext);
  const linkClass = classNames('link-container', `link-container--${theme}`);

  return (
    <Link to={to} className={linkClass}>
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CustomLink;
