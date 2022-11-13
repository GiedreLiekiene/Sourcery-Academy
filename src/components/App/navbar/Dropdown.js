import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

const Dropdown = ({ submenuItems, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
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
  submenuItems: PropTypes.array.isRequired,
  dropdown: PropTypes.bool.isRequired,
};
