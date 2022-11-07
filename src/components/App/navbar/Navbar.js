import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import SourceryLogoSvg from '~/assets/svg/sourcery-logo.svg';
import SourceryLogoSvgInside from '~/assets/svg/sourcery-logo-inside.svg';
import './navbar.scss';

const Navbar = () => {
  let links = [
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
  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          <div className="logo-svg-container">
            <SourceryLogoSvg className="logo-svg" />
            <SourceryLogoSvgInside className="logo-svg-inside" />
          </div>
          <span className="logo-text-container">
            <span className="logo-text">Sourcery Academy</span>
          </span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? 'active' : ''}
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
    </>
  );
};

export default Navbar;
