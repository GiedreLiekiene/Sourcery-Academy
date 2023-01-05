import React from 'react';
import './check-box.scss';
import PropTypes from 'prop-types';
const Checkbox = ({
  type = 'checkbox',
  label,
  isChecked,
  value,
  name,
  onChange,
  id,
}) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__check"
        type={type}
        checked={isChecked}
        value={value}
        name={name}
        onChange={onChange}
        tabIndex={0}
        id={id}
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
  isChecked: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
  id: PropTypes.string,
};
