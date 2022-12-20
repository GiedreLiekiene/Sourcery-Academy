import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './navbar-link.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

const InlineSubmenu = ({ submenuItems }) => {
  const location = useLocation();

  return (
    <>
      {submenuItems.map(({ path, name }) => {
        const navbarLinkSubmenuClass = classNames('navbar-link is-submenu', {
          active: location.pathname.includes(path),
        });
        return (
          <Link to={path} key={name} className={navbarLinkSubmenuClass}>
            {name}
          </Link>
        );
      })}
    </>
  );
};

InlineSubmenu.propTypes = {
  submenuItems: PropTypes.array.isRequired,
};

const NavbarLink = ({ link: { path, name, Icon, submenu } }) => {
  const location = useLocation();
  let active = location.pathname.includes(path);

  const [showSubmenu, setShowSubmenu] = useState(false);

  // Automatically close submenu when route changes
  useEffect(() => {
    setShowSubmenu(false);
  }, [location.pathname]);

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
        <div className="navbar-link__inline">
          <InlineSubmenu submenuItems={submenu} />{' '}
        </div>
      )}
    </div>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired,
};
