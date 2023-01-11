import React from 'react';
import './radio-input.scss';
import PropTypes from 'prop-types';

export default function RadioInput({
  type = 'radio',
  value,
  label,
  id,
  name,
  large,
  onChange,
  checked,
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        className={'radio-input'}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label && (
        <label
          className={'radio-input' + (large ? '--large' : '--small')}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.node.isRequired,
  large: PropTypes.bool,
};
