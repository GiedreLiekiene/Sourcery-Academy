import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoSvg from '~/assets/svg/Logo.svg';
import './navbar.scss';
import NavbarLinks from './NavbarLinks';
import { ROUTES } from '../App/Routes';
import MobilemenuButton from '../MobilemenuButton/MobilemenuButton';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Navbar = () => {
  const [showMobilemenu, setShowMobilemenu] = useState(false);
  const overlayButtonClass = classNames('overlay', {
    hide: !showMobilemenu,
  });
  const navbarLinksClass = classNames('navbar__links', {
    hide: !showMobilemenu,
  });

  function closeMobilemenu() {
    setShowMobilemenu(false);
  }
  return (
    <>
      <div className="navbar">
        <Link to={ROUTES.home} className="navbar__logo">
          <LogoSvg />
        </Link>
        <button
          type="button"
          className={overlayButtonClass}
          onClick={closeMobilemenu}
        />
        <div className={navbarLinksClass} onClick={closeMobilemenu}>
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
