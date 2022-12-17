import React from 'react';
import './mobile-menu.scss';
import { Link, useLocation } from 'react-router-dom';
import LogoSvg from '~/assets/svg/Logo.svg';
import PropTypes from 'prop-types';

const Mobilemenu = ({ links, close }) => {
  const location = useLocation();
  return (
    <>
      <div className="overlay" onClick={close} />
      <div className="mobile-menu" onClick={close}>
        <Link to="/" className="mobile-menu__logo">
          <LogoSvg />
        </Link>
        {links.map(({ path, name, onClick }) => (
          <Link
            to={path}
            className={
              location.pathname === path
                ? 'mobile-menu__link active'
                : 'mobile-menu__link'
            }
            key={name}
            onClick={onClick}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Mobilemenu;

Mobilemenu.propTypes = {
  links: PropTypes.array.isRequired,
  close: PropTypes.func,
};
