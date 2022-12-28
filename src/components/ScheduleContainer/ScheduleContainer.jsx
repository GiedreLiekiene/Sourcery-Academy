import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import scheduleInformation from '../../utils/scheduleInformation.json';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import './schedule-container.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

function ScheduleContainer({ academy }) {
  const { theme } = useContext(ThemeContext);

  const months = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December',
  };

  function getLectures(academy) {
    return scheduleInformation
      .filter((item) => item.name === academy)
      .map((item) => item.lectures)[0];
  }

  const lectures = getLectures(academy);

  const half = Math.ceil(lectures.length / 2);
  const lecturesFirstHalf = lectures.slice(0, half);
  const lecturesSecondHalf = lectures.slice(half);

  const firstHalfMonths = lecturesFirstHalf.flatMap((item) =>
    item.sessions.map((session) => session.date.split(' ')[0])
  );
  const secondHalfMonths = lecturesSecondHalf.flatMap((item) =>
    item.sessions.map((session) => session.date.split(' ')[0])
  );

  const firstHalfNoDuplicates = firstHalfMonths.filter(
    (item, index) => firstHalfMonths.indexOf(item) === index
  );
  const secondHalfNoDuplicates = secondHalfMonths.filter(
    (item, index) => secondHalfMonths.indexOf(item) === index
  );

  const firstTitle = firstHalfNoDuplicates
    .map((key) => (months.hasOwnProperty(key) ? months[key] : undefined))
    .join(' / ');
  const secondTitle = secondHalfNoDuplicates
    .map((key) => (months.hasOwnProperty(key) ? months[key] : undefined))
    .join(' / ');

  const titleClass = classNames(
    'schedule-container__title',
    `schedule-container__title--${theme}`
  );

  return (
    <div className="schedule-container">
      <div className="schedule-container__left">
        <h2 className={titleClass}>{firstTitle}</h2>
        <div className="schedule-cards">
          {lecturesFirstHalf.map((lecture) => {
            return (
              <div className="schedule-cards__item" key={lecture.id}>
                <ScheduleCard scheduleInfo={lecture} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="schedule-container__right">
        <h2 className={titleClass}>{secondTitle}</h2>
        <div className="schedule-cards">
          {lecturesSecondHalf.map((lecture) => {
            return (
              <div className="schedule-cards__item" key={lecture.id}>
                <ScheduleCard scheduleInfo={lecture} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

ScheduleContainer.propTypes = {
  academy: PropTypes.string.isRequired,
};

export default ScheduleContainer;
