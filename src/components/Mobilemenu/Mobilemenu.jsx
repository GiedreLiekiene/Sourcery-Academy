import React, { useState, Fragment } from 'react';
import './mobile-menu.scss';
import { Link, useLocation } from 'react-router-dom';
import LogoSvg from '~/assets/svg/Logo.svg';
import PropTypes from 'prop-types';
import Dropdown from '~/components/navbar/Dropdown.js';

const Mobilemenu = ({ links, close }) => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="overlay" onClick={close} />
      <div className="mobile-menu" onClick={close}>
        <Link to="/" className="mobile-menu__logo">
          <LogoSvg />
        </Link>
        {links.map(({ path, name, Icon, submenu }) => {
          let openDropdown = (e) => {
            setDropdown((prev) => !prev);
            e.stopPropagation();
          };
          return (
            <Fragment key={name}>
              <Link
                to={path}
                className={
                  location.pathname === path
                    ? 'mobile-menu__link active'
                    : 'mobile-menu__link'
                }
                key={name}
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={submenu ? openDropdown : undefined}
              >
                {name}
                {Icon && <Icon className="mobile-menu__link-icon" />}
              </Link>
              {submenu && dropdown && (
                <div className="submenu">
                  <Dropdown submenuItems={submenu} dropdown={dropdown} />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Mobilemenu;

Mobilemenu.propTypes = {
  links: PropTypes.array.isRequired,
  close: PropTypes.func,
};
