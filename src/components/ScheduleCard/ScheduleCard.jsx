import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './schedule-card.scss';

function ScheduleCard({ id, title, children, theme }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <h3>
        <button
          id={`${id}-header`}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title}
        </button>
      </h3>
      {isExpanded && (
        <section
          id={`${id}-panel`}
          aria-labelledby={`${id}-header`}
          hidden={!isExpanded}
        >
          {children}
        </section>
      )}
    </>
  );
}

ScheduleCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.number,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default ScheduleCard;
