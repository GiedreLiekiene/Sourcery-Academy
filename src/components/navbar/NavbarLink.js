import React from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar-link.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const InlineSubmenu = ({ submenuItems }) => {
  const location = useLocation();

  return (
    <>
      {submenuItems.map(({ path, name }) => (
        <Link
          to={path}
          key={name}
          className={
            'navbar-link is-submenu' +
            (location.pathname.includes(path) ? ' active' : '')
          }
        >
          {name}
        </Link>
      ))}
    </>
  );
};

InlineSubmenu.propTypes = {
  submenuItems: PropTypes.array.isRequired,
};

const NavbarLink = ({ link: { path, name, Icon, submenu }, popupSubmenu }) => {
  const location = useLocation();
  let active = location.pathname.includes(path);

  const [showSubmenu, setShowSubmenu] = useState(false);

  let openCloseSubmenu = (e) => {
    setShowSubmenu((prev) => !prev);
    e.stopPropagation();
  };

  return (
    <div>
      <Link
        className={'navbar-link' + (active ? ' is-active' : '')}
        to={submenu ? undefined : path}
        key={name}
        aria-expanded={showSubmenu && popupSubmenu ? 'true' : 'false'}
        onClick={submenu ? openCloseSubmenu : undefined}
      >
        {name}
        {Icon && (
          <Icon
            className={'navbar-link__icon ' + (showSubmenu ? 'is-open' : '')}
          />
        )}
      </Link>
      <div className="navbar-link__inline">
        {submenu && showSubmenu && <InlineSubmenu submenuItems={submenu} />}
      </div>
    </div>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired,
  popupSubmenu: PropTypes.bool,
};
