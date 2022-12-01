import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import LogoSvg from '~/assets/svg/logo.svg';
import './navbar.scss';
import NavbarLink from './NavbarLink';
import { ROUTES } from '../App/Routes';

const navigationLinks = [
  {
    name: 'About us',
    path: ROUTES.about,
  },
  {
    name: 'Academies',
    path: ROUTES.academies,
    Icon: ArrowDownSvg,
    submenu: [
      {
        name: 'Sourcery for Developers',
        path: ROUTES.forDevelopers,
      },
      {
        name: 'Sourcery for Testers',
        path: ROUTES.forTesters,
      },
      {
        name: 'Sourcery for Front-End',
        path: ROUTES.forFrontEnd,
      },
      {
        name: 'Sourcery for Kids',
        path: ROUTES.forKids,
      },
    ],
  },
  {
    name: 'Media',
    path: ROUTES.media,
  },
  {
    name: 'Register',
    path: ROUTES.register,
  },
  {
    name: 'Questions',
    path: ROUTES.questions,
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
export { navigationLinks };
