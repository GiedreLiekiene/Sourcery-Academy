import React, { useState } from 'react';
import './check-box.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', label, value, name, onChange, id }) => {
  const [checked, isChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      isChecked((current) => !current);
    }
  };

  return (
    <div className="checkbox">
      <input
        className="checkbox__check"
        type={type}
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
        tabIndex={0}
        id={id}
        onKeyDown={handleKeyDown}
      />

      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
Checkbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
  id: PropTypes.string.isRequired,
};