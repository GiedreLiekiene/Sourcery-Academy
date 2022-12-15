import React from 'react';
import './sidebar-button.scss';
import PropTypes from 'prop-types';

const SidebarButton = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={active ? 'sidebar-button active' : 'sidebar-button'}
    >
      <div className="sidebar-button--bar" />
      <div className="sidebar-button--bar" />
      <div className="sidebar-button--bar" />
    </button>
  );
};

SidebarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default SidebarButton;
