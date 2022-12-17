import React from 'react';
import './sidebar-button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarButton = ({ onClick, active }) => {
  const buttonClass = classNames('sidebar-button', {
    'sidebar-button is-active': active,
  });
  return (
    <button onClick={onClick} className={buttonClass}>
      <div className="sidebar-button__bar sidebar-button__bar--top" />
      <div className="sidebar-button__bar sidebar-button__bar--middle" />
      <div className="sidebar-button__bar sidebar-button__bar--bottom" />
    </button>
  );
};

SidebarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default SidebarButton;
