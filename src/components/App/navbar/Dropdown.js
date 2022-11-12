import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ submenuItems }) => {
  return (
    <ul className="dropdown">
      {submenuItems.map((submenu, index) => (
        <li key={index} className="navbar__links--link">
          <a href={submenu.path}>{submenu.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  submenuItems: PropTypes.array,
};
