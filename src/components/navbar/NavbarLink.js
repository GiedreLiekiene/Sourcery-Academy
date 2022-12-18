import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar-link.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavbarLink = ({ link: { path, name, Icon, submenu }, active }) => {
  const [dropdown, setDropdown] = useState(false);

  let openDropdown = (e) => {
    setDropdown((prev) => !prev);
    e.stopPropagation();
  };

  return (
    <div>
      <Link
        className={'navbarlink' + (active ? ' active' : '')}
        to={path}
        key={name}
        aria-expanded={dropdown ? 'true' : 'false'}
        onClick={submenu ? openDropdown : undefined}
      >
        {name}
        {Icon && <Icon className="navbarlink__icon" />}
      </Link>
      {submenu && <Dropdown submenuItems={submenu} dropdown={dropdown} />}
    </div>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired,
  active: PropTypes.bool,
};
