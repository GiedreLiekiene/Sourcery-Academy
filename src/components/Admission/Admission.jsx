import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './admission.scss';
import CardContainer from '../CardContainer/CardContainer';
import TextActionContainer from '../TextActionContainer/TextActionContainer';
import TextImgContainer from '../TextImgContainer/TextImgContainer';
import ShowingLocations from '../../assets/svg/image-girl-showing-locations.svg';
import academyInformation from '../../utils/academyInformation.json';
import DatesContainer from '../DatesContainer/DatesContainer';
import { ThemeContext } from '../../utils/ThemeContext';

export default function Admission({ academy = 'Sourcery for Developers' }) {
  const { theme } = useContext(ThemeContext);

  const getApplicationSteps = (academy) => {
    return academyInformation
      .filter((item) => item.academy === academy)
      .map((item) => item.admission)[0];
  };
  const applicationSteps = useMemo(() => getApplicationSteps(academy), []);

  const pointClass = classNames(
    'admission-wrapper__point',
    `admission-wrapper__point--${theme}`
  );

  const imageClass = classNames(
    'admission-wrapper__image',
    `admission-wrapper__image--${theme}`
  );

  return (
    <div className="admission-wrapper">
      <CardContainer title="The Admission">
        <TextImgContainer
          leftChild={
            <div>
              <TextActionContainer
                leftMobileText
                headingLevel={2}
                title="Introduction"
                text={applicationSteps.introduction}
              />
              <TextActionContainer
                leftMobileText
                className="points"
                headingLevel={2}
                title="Learning points"
                text={applicationSteps['learning points'].map(
                  (point, index) => (
                    <li className={pointClass} key={index}>
                      {point}
                    </li>
                  )
                )}
              />
              <TextActionContainer
                leftMobileText
                headingLevel={2}
                title="Interview"
                text={applicationSteps['interview promise']}
              />
            </div>
          }
          rightChild={
            <div className="admission-wrapper__right-column">
              <DatesContainer academy="Sourcery for Developers" />
              <div className={imageClass}>
                <ShowingLocations />
              </div>
            </div>
          }
        />
      </CardContainer>
    </div>
  );
}

Admission.propTypes = {
  academy: PropTypes.string.isRequired,
};
