import React from 'react';
import './sidebar-button.scss';
import PropTypes from 'prop-types';

const SidebarButton = ({ onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={active ? 'sidebar__button active' : 'sidebar__button'}
    >
      <div className="sidebar__button--bar"></div>
      <div className="sidebar__button--bar"></div>
      <div className="sidebar__button--bar"></div>
    </div>
  );
};

export default SidebarButton;

SidebarButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};
