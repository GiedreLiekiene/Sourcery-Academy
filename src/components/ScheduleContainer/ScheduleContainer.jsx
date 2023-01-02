import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import scheduleInformation from '../../utils/scheduleInformation.json';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import './schedule-container.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';
import { months } from './MONTHS';
import BoxShadow from '../BoxShadow/BoxShadow';

function ScheduleContainer({ academy }) {
  const { theme } = useContext(ThemeContext);

  const getLectures = (academy) => {
    return scheduleInformation
      .filter((item) => item.name === academy)
      .map((item) => item.lectures)[0];
  };

  const lectures = useMemo(() => getLectures(academy), []);

  const getMonthsTitle = (lectures) => {
    return lectures
      .flatMap(({ sessions }) => sessions.map(({ date }) => date.split(' ')[0]))
      .filter((item, index, array) => array.indexOf(item) === index)
      .map((month) =>
        months.hasOwnProperty(month) ? months[month] : undefined
      )
      .join(' / ');
  };

  const getHalves = (lectures) => {
    const half = Math.ceil(lectures.length / 2);
    const firstHalf = lectures.slice(0, half);
    const secondHalf = lectures.slice(half);

    return [firstHalf, secondHalf];
  };

  const getQuarters = (lectures) => {
    const half = Math.ceil(lectures.length / 2);
    const firstHalf = lectures.slice(0, half);
    const secondHalf = lectures.slice(half);

    const firstQuarter = firstHalf.slice(0, Math.ceil(firstHalf.length / 2));
    const secondQuarter = firstHalf.slice(Math.ceil(firstHalf.length / 2));
    const thirdQuarter = secondHalf.slice(0, Math.ceil(secondHalf.length / 2));
    const fourthQuarter = secondHalf.slice(Math.ceil(secondHalf.length / 2));

    return [firstQuarter, secondQuarter, thirdQuarter, fourthQuarter];
  };

  const [
    lecturesFirstQuarter,
    lecturesSecondQuarter,
    lecturesThirdQuarter,
    lecturesFourthQuarter,
  ] = useMemo(() => getQuarters(lectures), []);

  const [lecturesFirstHalf, lecturesSecondHalf] = useMemo(
    () => getHalves(lectures),
    []
  );

  const firstTitle = useMemo(() => getMonthsTitle(lecturesFirstHalf), []);
  const secondTitle = useMemo(() => getMonthsTitle(lecturesSecondHalf), []);

  const titleClass = classNames(
    'schedule-container__title',
    `schedule-container__title--${theme}`
  );

  return (
    <div className="schedule-container">
      <div className="schedule-container__column">
        <h2 className={titleClass}>{firstTitle}</h2>
        <div className="schedule-container__cards">
          {lecturesFirstQuarter.map((lecture) => {
            return (
              <div key={lecture.id}>
                <BoxShadow>
                  <ScheduleCard scheduleInfo={lecture} />
                </BoxShadow>
              </div>
            );
          })}
        </div>
        <div className="schedule-container__cards">
          {lecturesSecondQuarter.map((lecture) => {
            return (
              <div key={lecture.id}>
                <BoxShadow>
                  <ScheduleCard scheduleInfo={lecture} />
                </BoxShadow>
              </div>
            );
          })}
        </div>
      </div>
      <div className="schedule-container__column">
        <h2 className={titleClass}>{secondTitle}</h2>
        <div className="schedule-container__cards">
          {lecturesThirdQuarter.map((lecture) => {
            return (
              <div key={lecture.id}>
                <BoxShadow>
                  <ScheduleCard scheduleInfo={lecture} />
                </BoxShadow>
              </div>
            );
          })}
        </div>
        <div className="schedule-container__cards">
          {lecturesFourthQuarter.map((lecture) => {
            return (
              <div key={lecture.id}>
                <BoxShadow>
                  <ScheduleCard scheduleInfo={lecture} />
                </BoxShadow>
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
