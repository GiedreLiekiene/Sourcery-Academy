import React, { useState } from 'react';
import './check-box.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', label, value, name, onChange, id }) => {
  const [checked, setChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setChecked((current) => !current);
    }
  };

  const handleClick = () => {
    setChecked((current) => !current);
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
        onClick={handleClick}
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
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
