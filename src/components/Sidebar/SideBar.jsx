import React from 'react';
import './side-bar.scss';
import { Link, useLocation } from 'react-router-dom';
import LogoSvg from '~/assets/svg/Logo.svg';
import PropTypes from 'prop-types';

const Sidebar = ({ links, close }) => {
  const location = useLocation();
  return (
    <>
      <div className="overlay" onClick={close} />
      <div className="sidebar" onClick={close}>
        <Link to="/" className="sidebar__logo">
          <LogoSvg />
        </Link>
        {links.map(({ path, name, onClick }) => (
          <Link
            to={path}
            className={
              location.pathname === path
                ? 'sidebar__link active'
                : 'sidebar__link'
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

export default Sidebar;

Sidebar.propTypes = {
  links: PropTypes.array.isRequired,
  close: PropTypes.func,
};
