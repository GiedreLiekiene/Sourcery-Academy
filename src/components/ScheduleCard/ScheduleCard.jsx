import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ScheduleCardHeader from './ScheduleCardHeader';
import ScheduleCardPanel from './ScheduleCardPanel';
import BoxShadow from '../BoxShadow/BoxShadow';
import { ThemeContext } from '../../utils/ThemeContext';
function ScheduleCard({
  scheduleInfo: { id, title, lecturers, duration, startTime, sessions },
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <BoxShadow theme={theme}>
      <ScheduleCardHeader
        id={id}
        title={title}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {isExpanded && (
        <ScheduleCardPanel
          id={id}
          lecturers={lecturers}
          startTime={startTime}
          duration={duration}
          isExpanded={isExpanded}
          sessions={sessions}
        />
      )}
    </BoxShadow>
  );
}

ScheduleCard.propTypes = {
  scheduleInfo:
    PropTypes.object &&
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      lecturers: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      sessions: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default ScheduleCard;
