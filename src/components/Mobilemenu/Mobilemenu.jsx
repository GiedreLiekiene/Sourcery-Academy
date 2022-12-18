import React from 'react';
import './mobile-menu.scss';
import { Link } from 'react-router-dom';
import LogoSvg from '~/assets/svg/Logo.svg';
import PropTypes from 'prop-types';
import NavbarLinks from '../navbar/NavbarLinks';

const Mobilemenu = ({ close }) => {
  return (
    <>
      <div className="overlay" onClick={close} />
      <div className="mobile-menu" onClick={close}>
        <Link to="/" className="mobile-menu__logo">
          <LogoSvg />
        </Link>
        <NavbarLinks />
      </div>
    </>
  );
};

export default Mobilemenu;

Mobilemenu.propTypes = {
  close: PropTypes.func,
};
