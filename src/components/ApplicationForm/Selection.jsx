import React from 'react';
import './selection.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Academies = [
  {
    name: 'academy',
    label: 'Full-stack',
    id: 'Full-stack',
    value: 'Full-stack',
    key: 1,
  },
  {
    name: 'academy',
    label: 'Testers',
    id: 'Testers',
    value: 'Testers',
    key: 2,
  },
  {
    name: 'academy',
    label: 'Front-End',
    id: 'Front-end',
    value: 'Front-end',
    key: 3,
  },
];
export default function Selection({ onChange, error }) {
  const wrapClass = classNames('selection-wrapper', {
    'selection-wrapper--is-error': error,
  });
  return (
    <div>
      <div className={wrapClass}>
        {Academies.map(function (academy) {
          return (
            <div key={academy.key} className="selection-wrapper__item">
              <input
                type="radio"
                value={academy.value}
                id={academy.id}
                name={academy.name}
                onChange={onChange}
              />
              <label className="selection-wrapper__label" htmlFor={academy.id}>
                {academy.label}
              </label>
            </div>
          );
        })}
      </div>
      {error && <div className="input__error">Please enter all the fields</div>}
    </div>
  );
}

Selection.propTypes = {
  error: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};
