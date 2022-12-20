import React from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './navbar-link.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

const InlineSubmenu = ({ submenuItems, close, path }) => {
  const location = useLocation();
  const navbarLinkSubmenuClass = classNames('navbar-link is-submenu', {
    active: location.pathname.includes(path),
  });

  return (
    <>
      {submenuItems.map(({ path, name }) => (
        <Link
          to={path}
          key={name}
          className={navbarLinkSubmenuClass}
          onClick={close}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

InlineSubmenu.propTypes = {
  submenuItems: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

const NavbarLink = ({ link: { path, name, Icon, submenu } }) => {
  const location = useLocation();
  let active = location.pathname.includes(path);

  const [showSubmenu, setShowSubmenu] = useState(false);
  const navbarLinkClass = classNames('navbar-link', {
    'is-active': active,
  });
  const navbarLinkIconClass = classNames('navbar-link__icon ', {
    'is-open': showSubmenu,
  });

  let openCloseSubmenu = (e) => {
    setShowSubmenu((prev) => !prev);
    e.stopPropagation();
  };

  return (
    <div>
      <Link
        className={navbarLinkClass}
        to={submenu ? undefined : path}
        key={name}
        aria-expanded={showSubmenu ? 'true' : 'false'}
        onClick={submenu ? openCloseSubmenu : undefined}
      >
        {name}
        {Icon && <Icon className={navbarLinkIconClass} />}
      </Link>
      {submenu && showSubmenu && (
        <div className="navbar-link--inline">
          <InlineSubmenu
            submenuItems={submenu}
            close={() => setShowSubmenu(false)}
          />{' '}
        </div>
      )}
    </div>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired,
};
