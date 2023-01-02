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

  return (
    <div className={sessionCardClass}>
      <div className="session-card__date">
        <p className="session-card__date-month">{month}</p>
        <p className="session-card__date-day">{day}</p>
      </div>
      <span className="session-card__vertical-line"></span>
      <div className="session-card__location-container">
        <IconLocation className="session-card__location-mark" />
        <p className="session-card__location-place">{location}</p>
      </div>
    </div>
  );
}

SessionCard.propTypes = {
  startTime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default SessionCard;
