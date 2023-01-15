import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './process-container.scss';

function ProcessContainer({ children }) {
  const leftColumnData = useMemo(() =>
    children
      .filter((i) => i.id % 2 !== 0)
      .map((item) => (
        <div key={item.id} className="process-container-wrapper__step">
          <div>{item.title}</div>
        </div>
      ))
  );

  const rightColumnData = useMemo(() =>
    children
      .filter((i) => i.id % 2 === 0)
      .map((item) => (
        <div key={item.id} className="process-container-wrapper__step">
          <div>{item.title}</div>
        </div>
      ))
  );

  return (
    <div className="process-container-wrapper">
      <div className="process-container-wrapper__left-column">
        {leftColumnData}
      </div>
      <div className="process-container-wrapper__right-column">
        {rightColumnData}
      </div>
    </div>
  );
}

ProcessContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProcessContainer;
