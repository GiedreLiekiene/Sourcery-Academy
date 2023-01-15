import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './process-step.scss';
import { ThemeContext } from '../../utils/ThemeContext';

const ProcessStep = ({
  isFlipped = false,
  centerImage = false,
  title,
  text,
  stepNumber,
  imageNode,
}) => {
  const { theme } = useContext(ThemeContext);
  const processClass = classNames(
    'process-step-container',
    `process-step-container--${theme}`,
    {
      'process-step-container--is-flipped': isFlipped,
    }
  );
  const imageContainerClass = classNames(
    'process-step-container__image-container',
    {
      'process-step-container__image-container--center': centerImage,
      'process-step-container__image-container--right': !centerImage,
    }
  );

  return (
    <div className={processClass}>
      <h2 className="process-step-container__title">{title}</h2>
      <span className="process-step-container__horizontal-line"></span>
      <p className="process-step-container__text">{text}</p>
      <div className="process-step-container__image-holder">
        <p className="process-step-container__image-number">{stepNumber}</p>
        <div className={imageContainerClass}>{imageNode}</div>
      </div>
    </div>
  );
};

export default ProcessStep;

ProcessStep.propTypes = {
  isFlipped: PropTypes.bool,
  centerImage: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  imageNode: PropTypes.node.isRequired,
};
