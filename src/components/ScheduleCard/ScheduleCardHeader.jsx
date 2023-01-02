import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconArrow from '~/assets/svg/icon-arrow.svg';
import './schedule-card-header.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

function ScheduleCardHeader({ id, title, isExpanded, setIsExpanded }) {
  const { theme } = useContext(ThemeContext);

  const iconClass = classNames('schedule-card-header__icon', {
    'schedule-card-header__icon--rotated': isExpanded,
  });
  const actionClass = classNames(
    'schedule-card-header__action',
    `schedule-card-header__action--${theme}`
  );
  return (
    <button
      className={actionClass}
      id={`${id}-header`}
      aria-controls={`${id}-panel`}
      aria-expanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {title}
      <div className={iconClass}>
        <IconArrow />
      </div>
    </button>
  );
}

ScheduleCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  isExpanded: PropTypes.bool,
  setIsExpanded: PropTypes.any,
};

export default ScheduleCardHeader;
