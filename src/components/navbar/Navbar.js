import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import LogoSvg from '~/assets/svg/Logo.svg';
import './navbar.scss';
import NavbarLink from './NavbarLink';
import { ROUTES } from '../App/Routes';
import Sidebar from '../Sidebar/SideBar.jsx';
import SidebarButton from '../SidebarButton/SidebarButton';

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
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
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
        <div className="navbar__burger">
          <SidebarButton
            onClick={() => setShowSidebar(!showSidebar)}
            active={showSidebar}
          />
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={navigationLinks} />}
    </>
  );
};

export default Navbar;
