import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import LogoSvg from '~/assets/svg/logo.svg';
import './navbar.scss';

const links = [
  {
    name: 'About us',
    path: '/about',
  },
  {
    name: 'Academies',
    path: '/academies',
    icon: ArrowDownSvg,
  },
  {
    name: 'Media',
    path: '/media',
  },
  {
    name: 'Register',
    path: '/register',
  },
  {
    name: 'Questions',
    path: '/questions',
  },
];

const Navbar = () => {
  return (
    <div className="navbar container">
      <Link to="/" className="logo">
        <LogoSvg />
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <Link
            className={
              'nav-link' + (location.pathname === link.path ? ' active' : '')
            }
            to={link.path}
            key={link.name}
            onClick={link.onClick}
          >
            {link.name}
            {link.icon && <link.icon className={'navbar-icon'} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
