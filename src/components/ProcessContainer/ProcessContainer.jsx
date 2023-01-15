import React from 'react';
import PropTypes from 'prop-types';
import './process-container.scss';
import ProcessStep from '../ProcessStep/ProcessStep';
import academyInfo from '../../utils/academyInformation.json';
import ProcessStepImageHandler from '../ProcessStep/ProcessStepImageHandler';
import { assets } from '../../assets/svg/assets';

function ProcessContainer({ academy = 0 }) {
  const applicationStepText = academyInfo[academy]['application steps'];

  const {
    ProcessStepOne,
    ProcessStepTwo,
    ProcessStepThree,
    ProcessStepFour,
  } = assets;

  return (
    <div className="process-container-wrapper">
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Apply"
          text={applicationStepText.first}
          stepNumber={1}
          imageNode={<ProcessStepImageHandler image={<ProcessStepOne />} />}
          centerImage
        />
      </div>
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Pass the admission"
          text={applicationStepText.second}
          stepNumber={2}
          imageNode={<ProcessStepImageHandler image={<ProcessStepTwo />} />}
          isFlipped
        />
      </div>
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Learn from the experts"
          text={applicationStepText.third}
          stepNumber={3}
          imageNode={<ProcessStepImageHandler image={<ProcessStepThree />} />}
        />
      </div>
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Join the company"
          text={applicationStepText.fourth}
          stepNumber={4}
          imageNode={<ProcessStepImageHandler image={<ProcessStepFour />} />}
          isFlipped
          centerImage
        />
      </div>
    </div>
  );
}

ProcessContainer.propTypes = {
  academy: PropTypes.number.isRequired,
};

export default ProcessContainer;
