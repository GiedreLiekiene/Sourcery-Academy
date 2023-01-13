import React from 'react';
import './process-step.scss';

const ProcessStep = () => {
  return (
    <div className="process-step-container">
      <h2 className="process-step-container__title">Apply</h2>
      <span className="process-step-container__horizontal-line"></span>
      <p className="process-step-container__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure
        voluptate corrupti eius sint tempora, iste atque minima quae iusto?
      </p>
      <div className="process-step-container__image-holder">
        <p className="process-step-container__image-number">1</p>
        <figure className="process-step-container__image-container"></figure>
      </div>
    </div>
  );
};

export default ProcessStep;
