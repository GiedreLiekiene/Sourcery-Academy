import React, { useContext, useMemo } from 'react';
import PropTypes, { object } from 'prop-types';
import scheduleInformation from '../../utils/scheduleInformation.json';
import DateCard from '../DateCard/DateCard';
import './dates-container.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

function DatesContainer({ academy }) {
  const { theme } = useContext(ThemeContext);

  const getAdmissionDates = (academy) => {
    return scheduleInformation
      .filter((item) => item.name === academy)
      .map((item) => item['admission dates'])[0];
  };

  const eventDates = useMemo(() => getAdmissionDates(academy), [academy]);

  const titleClass = classNames(
    'dates-container__title',
    `dates-container__title--${theme}`
  );

  return (
    <div className="dates-container">
      <h2 className={titleClass}>Dates</h2>
      <div className="dates-container__cards">
        {eventDates.map((event) => {
          return (
            <div className="dates-container__item" key={event['event name']}>
              <DateCard
                eventName={event['event name']}
                startDate={event['start date']}
                endDate={event['end date']}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

DatesContainer.propTypes = {
  academy: PropTypes.string.isRequired,
};

export default DatesContainer;
