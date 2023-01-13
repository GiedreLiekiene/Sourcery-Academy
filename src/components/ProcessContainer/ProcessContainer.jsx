import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import './process-container.scss';

function ProcessContainer() {
  const { theme } = useContext(ThemeContext);
  const fakeData = [
    {
      id: 1,
      title: 'Apply',
    },
    {
      id: 2,
      title: 'Pass the admission',
    },
    {
      id: 3,
      title: 'Learn from the experts',
    },
    {
      id: 4,
      title: 'Join the company',
    },
  ];

  const titleClass = classNames(
    'process-container-wrapper__step-title',
    `process-container-wrapper__step-title--${theme}`
  );

  const fakeDataMemo = useMemo(() =>
    fakeData.map((item) => (
      <div key={item.id} className="process-container-wrapper__step">
        <div className={titleClass}>{item.title}</div>
      </div>
    ))
  );

  return <div className="process-container-wrapper">{fakeDataMemo}</div>;
}

export default ProcessContainer;
