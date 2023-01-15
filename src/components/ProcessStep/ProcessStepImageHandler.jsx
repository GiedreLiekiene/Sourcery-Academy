import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './process-step-image-handler.scss';
import { ThemeContext } from '../../utils/ThemeContext';

const ProcessStepImageHandler = ({ image }) => {
  const { theme } = useContext(ThemeContext);
  const imageClass = classNames(
    'process-step-image',
    `process-step-image--${theme}`
  );
  return <div className={imageClass}>{image}</div>;
};

export default ProcessStepImageHandler;

ProcessStepImageHandler.propTypes = {
  image: PropTypes.node.isRequired,
};
