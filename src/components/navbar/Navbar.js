import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import LogoSvg from '~/assets/svg/Logo.svg';
import './navbar.scss';
import NavbarLink from './NavbarLink';
import { ROUTES } from '../App/Routes';
import Mobilemenu from '../Mobilemenu/Mobilemenu.jsx';
import MobilemenuButton from '../MobilemenuButton/MobilemenuButton';

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
  const [showMobilemenu, setShowMobilemenu] = useState(false);
  const location = useLocation();

  function closeMobilemenu() {
    setShowMobilemenu(false);
  }
  return (
    <>
      <div className="navbar">
        <Link to={ROUTES.home} className="navbar__logo">
          <LogoSvg />
        </Link>
        <div className="navbar__links">
          {navigationLinks.map((link, index) => {
            const { path, name } = link;
            return (
              <NavbarLink
                active={location.pathname === path}
                link={link}
                key={index}
              >
                {name}
              </NavbarLink>
            );
          })}
        </div>
        <MobilemenuButton
          onClick={() => setShowMobilemenu(!showMobilemenu)}
          active={showMobilemenu}
        />
      </div>
      {showMobilemenu && (
        <Mobilemenu close={closeMobilemenu} links={navigationLinks} />
      )}
    </>
  );
};

export default Navbar;
