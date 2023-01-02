import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import IconLocation from '~/assets/svg/icon-location-mark.svg';
import './session-card.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

function SessionCard({ startTime, location }) {
  const { theme } = useContext(ThemeContext);
  const [month, day] = useMemo(() => startTime.split(' '), []);

  const sessionCardClass = classNames('session-card', `session-card--${theme}`);
  const monthClass = classNames(
    'session-card__date-month',
    `session-card__date-month--${theme}`
  );
  const dayClass = classNames(
    'session-card__date-day',
    `session-card__date-day--${theme}`
  );
  const placeClass = classNames(
    'session-card__location-place',
    `session-card__location-place--${theme}`
  );
  const verticalLineClass = classNames(
    'session-card__vertical-line',
    `session-card__vertical-line--${theme}`
  );
  const markerClass = classNames('location-mark', `location-mark--${theme}`);
  return (
    <div className={sessionCardClass}>
      <div className="session-card__date">
        <p className={monthClass}>{month}</p>
        <p className={dayClass}>{day}</p>
      </div>
      <span className={verticalLineClass}></span>
      <div className="session-card__location-container">
        <IconLocation className={markerClass} />
        <p className={placeClass}>{location}</p>
      </div>
    </div>
  );
}

SessionCard.propTypes = {
  startTime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default SessionCard;
