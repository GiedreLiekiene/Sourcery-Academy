import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { ROUTES } from '../App/Routes';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';

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

const NavbarLinks = () => {
  const location = useLocation();

  return (
    <>
      {navigationLinks.map((link) => {
        const { path, name } = link;
        return (
          <NavbarLink
            active={location.pathname === path}
            link={link}
            key={path}
          >
            {name}
          </NavbarLink>
        );
      })}
    </>
  );
};

export default NavbarLinks;
