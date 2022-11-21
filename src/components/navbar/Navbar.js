import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import LogoSvg from '~/assets/svg/logo.svg';
import './navbar.scss';
import NavbarLink from './NavbarLink';

const navigationLinks = [
  {
    name: 'About us',
    path: '/about',
  },
  {
    name: 'Academies',
    path: '/academies',
    Icon: ArrowDownSvg,
    submenu: [
      {
        name: 'Sourcery for Developers',
        path: '/academies/sourcery-for-developers',
      },
      {
        name: 'Sourcery for Testers',
        path: '/academies/sourcery-for-testers',
      },
      {
        name: 'Sourcery for Front-End',
        path: '/academies/sourcery-for-front-end',
      },
      {
        name: 'Sourcery for Kids',
        path: '/academies/sourcery-for-kids',
      },
    ],
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
  const location = useLocation();
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        <LogoSvg />
      </Link>
      <div className="navbar__links">
        {navigationLinks.map((link, index) => (
          <NavbarLink
            active={location.pathname === link.path}
            link={link}
            key={index}
          >
            {link.name}
          </NavbarLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;