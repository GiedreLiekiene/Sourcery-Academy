import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';
import {Link} from "react-router-dom";

const Dropdown = ({ submenuItems, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenuItems.map((submenu, index) => (
        <li key={index} className="dropdown__links">
          <Link to={submenu.path}>{submenu.name}</Link>
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
