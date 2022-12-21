import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './link.scss';

const CustomLink = ({ to, children, theme = 'primary' }) => {
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
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default CustomLink;
