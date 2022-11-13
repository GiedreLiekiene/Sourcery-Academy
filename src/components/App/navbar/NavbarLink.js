import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavbarLink = ({ link: { path, name, Icon, onClick, submenu } }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <Link
        className={
          'navbar__links--link' + (location.pathname === path ? ' active' : '')
        }
        to={path}
        key={name}
        aria-expanded={dropdown ? 'true' : 'false'}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {name}
        {Icon && <Icon className={'navbar__links--link--icon'} />}
      </Link>
      {submenu && <Dropdown submenuItems={submenu} dropdown={dropdown} />}
    </>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired,
};
