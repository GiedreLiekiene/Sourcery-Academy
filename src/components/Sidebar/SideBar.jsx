import React from 'react';
import './side-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import LogoSvg from '~/assets/svg/Logo.svg';
import PropTypes from 'prop-types';

const Sidebar = ({ links, close }) => {
  const location = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      <Link to="/" className="sidebar__logo">
        <LogoSvg />
      </Link>
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path
              ? 'sidebar__link active'
              : 'sidebar__link'
          }
          key={link.name}
          onClick={link.onClick}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  links: PropTypes.object.isRequired,
  close: PropTypes.bool,
};
