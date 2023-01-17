import React, { useState } from 'react';
import './check-box.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Checkbox = ({
  type = 'checkbox',
  label,
  value,
  name,
  onChange,
  id,
  error,
}) => {
  const [checked, setChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setChecked((current) => !current);
    }
  };

  const handleClick = () => {
    setChecked((current) => !current);
  };
  const checkBoxClass = classNames('checkbox__fake', {
    'checkbox__fake--is-error': error,
  });

  return (
    <div className="checkbox">
      <input
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
      <span className={checkBoxClass} />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
Checkbox.propTypes = {
  error: PropTypes.node,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
