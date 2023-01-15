import React from 'react';
import './selection.scss';
import PropTypes from 'prop-types';

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
export default function Selection({ checked, onChange }) {
  return (
    <div className="selection-wrapper">
      {Academies.map(function (academy) {
        return (
          <div key={academy.key} className="selection-wrapper__item">
            <input
              type="radio"
              value={academy.value}
              id={academy.id}
              name={academy.name}
              checked={checked}
              onChange={onChange}
            />
            <label className="selection-wrapper__label" htmlFor={academy.id}>
              {academy.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

Selection.propTypes = {
  checked: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
};
