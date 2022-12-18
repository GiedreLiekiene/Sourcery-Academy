import React from 'react';
import NavbarLink from './NavbarLink';
import { ACADEMIES_ROUTE, ROUTES } from '../App/Routes';
import ArrowDownSvg from '~/assets/svg/navbar-icon.svg';
import PropTypes from 'prop-types';

const navigationLinks = [
  {
    name: 'About us',
    path: ROUTES.about,
  },
  {
    name: 'Academies',
    path: ACADEMIES_ROUTE,
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

const NavbarLinks = ({ popupSubmenu }) => {
  return (
    <>
      {navigationLinks.map((link) => {
        const { path, name } = link;
        return (
          <NavbarLink link={link} key={name} popupSubmenu={popupSubmenu}>
            {name}
          </NavbarLink>
        );
      })}
    </>
  );
};

export default NavbarLinks;

NavbarLinks.propTypes = {
  popupSubmenu: PropTypes.bool.isRequired,
};
