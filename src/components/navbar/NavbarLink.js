import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavbarLink = ({ link: { path, name, Icon, submenu }, active }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <Link
        className={'navbar__links--link' + (active ? ' active' : '')}
        to={path}
        key={name}
        aria-expanded={dropdown ? 'true' : 'false'}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {name}
        {Icon && <Icon className="navbar__links--link-icon" />}
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
