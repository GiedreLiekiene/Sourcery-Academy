import React from 'react';
import './mobilemenu-button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MobilemenuButton = ({ onClick, active }) => {
  const buttonClass = classNames('mobilemenu-button', {
    'mobilemenu-button is-active': active,
  });
  return (
    <button onClick={onClick} className={buttonClass}>
      <div className="mobilemenu-button__bar mobilemenu-button__bar--top" />
      <div className="mobilemenu-button__bar mobilemenu-button__bar--middle" />
      <div className="mobilemenu-button__bar mobilemenu-button__bar--bottom" />
    </button>
  );
};

MobilemenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default MobilemenuButton;
