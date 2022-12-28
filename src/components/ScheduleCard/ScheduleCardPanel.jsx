import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconPerson from '~/assets/svg/icon-person-outline.svg';
import IconClock from '~/assets/svg/icon-clock.svg';
import './schedule-card-panel.scss';
import classNames from 'classnames';
import SessionCard from './SessionCard';
import { ThemeContext } from '../../utils/ThemeContext';

function ScheduleCardPanel({
  id,
  lecturers,
  startTime,
  duration,
  isExpanded,
  sessions,
}) {
  const { theme } = useContext(ThemeContext);

  const panelClass = classNames(
    'schedule-card-panel',
    `schedule-card-panel--${theme}`,
    {
      'schedule-card-panel--open': isExpanded,
    }
  );
  const panelUpperClass = classNames(
    'schedule-card-panel__upper',
    `schedule-card-panel__upper--${theme}`
  );
  return (
    <section
      className={panelClass}
      id={`${id}-panel`}
      aria-labelledby={`${id}-header`}
      hidden={!isExpanded}
    >
      <div className={panelUpperClass}>
        <div className="schedule-card-panel__lecturers">
          <IconPerson className="schedule-card-panel__icon-person" />
          <p>{lecturers}</p>
        </div>
        <div className="schedule-card-panel__time">
          <IconClock className="schedule-card-panel__icon-clock" />
          <p>{startTime}</p>
          <span className="schedule-card-panel__vertical-line"></span>
          <p>{duration} hours</p>
        </div>
      </div>
      <div className="schedule-card-panel__lower">
        {sessions.map((session, index) => {
          return (
            <SessionCard
              key={index}
              location={session.city}
              startTime={session.date}
            />
          );
        })}
      </div>
    </section>
  );
}

ScheduleCardPanel.propTypes = {
  lecturers: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  sessions: PropTypes.array,
};

export default ScheduleCardPanel;
