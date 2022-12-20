import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoSvg from '~/assets/svg/Logo.svg';
import './navbar.scss';
import NavbarLinks from './NavbarLinks';
import { ROUTES } from '../App/Routes';
import MobilemenuButton from '../MobilemenuButton/MobilemenuButton';
import PropTypes from 'prop-types';

const Navbar = () => {
  const [showMobilemenu, setShowMobilemenu] = useState(false);

  function closeMobilemenu() {
    setShowMobilemenu(false);
  }
  let mobileMenuClass = showMobilemenu ? '' : ' hide';
  return (
    <>
      <div className="navbar">
        <Link to={ROUTES.home} className="navbar__logo">
          <LogoSvg />
        </Link>
        <button
          type="button"
          className={'overlay' + mobileMenuClass}
          onClick={closeMobilemenu}
        />
        <div
          className={'navbar__links' + mobileMenuClass}
          onClick={closeMobilemenu}
        >
          <Link to={ROUTES.home} className="navbar__links__logo">
            <LogoSvg />
          </Link>
          <NavbarLinks />
        </div>

        <MobilemenuButton
          onClick={() => setShowMobilemenu(!showMobilemenu)}
          active={showMobilemenu}
        />
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  close: PropTypes.func,
};
