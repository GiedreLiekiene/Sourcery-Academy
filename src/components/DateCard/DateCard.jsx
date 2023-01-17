import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import './date-card.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

function DateCard({ startDate, endDate, eventName }) {
  const { theme } = useContext(ThemeContext);
  const [startMonth, startDay] = useMemo(() => startDate.split(' '), [
    startDate,
  ]);
  const [endMonth, endDay] = useMemo(() => endDate.split(' '), [endDate]);

  const dateCardClass = classNames('date-card', `date-card--${theme}`);

  return (
    <div className={dateCardClass}>
      <div className="date-card__date">
        <p className="date-card__date-month">
          {endDate ? startMonth + ' ' + endMonth : startMonth}
        </p>
        <p className="date-card__date-day">
          {endDate ? startDay + ' - ' + endDay : startDay}
        </p>
      </div>
      <span className="date-card__vertical-line"></span>
      <p className="date-card__event">{eventName}</p>
    </div>
  );
}

DateCard.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
};

export default DateCard;
