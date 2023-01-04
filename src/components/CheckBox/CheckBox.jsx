import React from 'react';
import './check-box.scss';
import PropTypes from 'prop-types';
const Checkbox = ({
  type = 'checkbox',
  id = 'checkbox',
  label,
  isChecked,
  value,
  name,
  onChange,
  tabIndex = 0,
}) => {
  return (
    <div className="checkbox">
      <input
        id={id}
        className="checkbox__box"
        type={type}
        checked={isChecked}
        value={value}
        name={name}
        onChange={onChange}
        tabIndex={tabIndex}
      />
      <label htmlFor="checkbox" className="checkbox__label">
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
Checkbox.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
};
