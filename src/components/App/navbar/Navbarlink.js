import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar.scss';
import PropTypes from 'prop-types';

const NavbarLink = ({ link: { path, name, Icon, onClick, submenu } }) => {
  return (
    <>
      <Link
        className={
          'navbar__links--link' + (location.pathname === path ? ' active' : '')
        }
        to={path}
        key={name}
        onClick={onClick}
      >
        {name}
        {Icon && <Icon className={'navbar__links--link--icon'} />}
      </Link>
      {submenu && <Dropdown submenuItems={submenu} />}
    </>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object,
};
