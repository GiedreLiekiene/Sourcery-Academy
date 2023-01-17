import React from 'react';
import './radio-input.scss';
import PropTypes from 'prop-types';

export default function RadioInput({ value, label, id, name, onChange }) {
  return (
    <div className="radio-input">
      <input
        type="radio"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
      <span className="radio-input__fake" />
      <label className="radio-input__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
