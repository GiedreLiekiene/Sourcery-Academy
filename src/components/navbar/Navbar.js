import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import LogoSvg from '~/assets/svg/Logo.svg';
import './navbar.scss';
import NavbarLinks from './NavbarLinks';
import { ROUTES } from '../App/Routes';
import Mobilemenu from '../Mobilemenu/Mobilemenu.jsx';
import MobilemenuButton from '../MobilemenuButton/MobilemenuButton';

const Navbar = () => {
  const [showMobilemenu, setShowMobilemenu] = useState(false);
  // const location = useLocation();

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
          <NavbarLinks popupSubmenu={true} />
        </div>
        <MobilemenuButton
          onClick={() => setShowMobilemenu(!showMobilemenu)}
          active={showMobilemenu}
        />
      </div>
      {showMobilemenu && <Mobilemenu close={closeMobilemenu} />}
    </>
  );
};

export default Navbar;
