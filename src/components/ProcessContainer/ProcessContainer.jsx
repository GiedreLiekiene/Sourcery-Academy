import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './process-container.scss';
import ProcessStep from '../ProcessStep/ProcessStep';
import academyInfo from '../../utils/academyInformation.json';
import ProcessStepImageHandler from '../ProcessStep/ProcessStepImageHandler';
import { assets } from '../../assets/svg/assets';

function ProcessContainer({ academy = 'Sourcery for Developers' }) {
  const getApplicationSteps = (academy) => {
    return academyInfo
      .filter((item) => item.academy === academy)
      .map((item) => item['application steps']);
  };

  const applicationSteps = useMemo(() => getApplicationSteps(academy), []);

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
          text={applicationSteps[0].first}
          stepNumber={1}
          imageNode={<ProcessStepImageHandler image={<ProcessStepOne />} />}
          centerImage
        />
      </div>
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Pass the admission"
          text={applicationSteps[0].second}
          stepNumber={2}
          imageNode={<ProcessStepImageHandler image={<ProcessStepTwo />} />}
          isFlipped
        />
      </div>
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Learn from the experts"
          text={applicationSteps[0].third}
          stepNumber={3}
          imageNode={<ProcessStepImageHandler image={<ProcessStepThree />} />}
        />
      </div>
      <div className="process-container-wrapper__step">
        <ProcessStep
          title="Join the company"
          text={applicationSteps[0].fourth}
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
  academy: PropTypes.string.isRequired,
};

export default ProcessContainer;
