import React from 'react';
import './radio-input.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function RadioInput({
  value,
  label,
  id,
  name,
  onChange,
  error,
}) {
  const radioClass = classNames('radio-input__fake', {
    'radio-input__fake--is-error': error,
  });
  return (
    <div className="radio-input">
      <input
        type="radio"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
      <span className={radioClass} />
      <label className="radio-input__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

RadioInput.propTypes = {
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
