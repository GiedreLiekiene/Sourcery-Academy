import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar-link.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const InlineSubmenu = ({ submenuItems }) => {
  return (
    <>
      {submenuItems.map(({ path, name }) => (
        <Link to={path} key={name} className={'navbarlink submenu'}>
          {name}
        </Link>
      ))}
    </>
  );
};

InlineSubmenu.propTypes = {
  submenuItems: PropTypes.array.isRequired,
};

const NavbarLink = ({
  link: { path, name, Icon, submenu },
  active,
  popupSubmenu,
}) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  let openCloseSubmenu = (e) => {
    setShowSubmenu((prev) => !prev);
    e.stopPropagation();
  };

  return (
    <div>
      <Link
        className={'navbarlink' + (active ? ' active' : '')}
        to={path}
        key={name}
        aria-expanded={showSubmenu && popupSubmenu ? 'true' : 'false'}
        onClick={submenu ? openCloseSubmenu : undefined}
      >
        {name}
        {Icon && <Icon className="navbarlink__icon" />}
      </Link>
      {submenu &&
        showSubmenu &&
        (popupSubmenu ? (
          <Dropdown submenuItems={submenu} />
        ) : (
          <InlineSubmenu submenuItems={submenu} />
        ))}
    </div>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired,
  active: PropTypes.bool,
  popupSubmenu: PropTypes.bool,
};
