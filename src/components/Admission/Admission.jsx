import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../utils/ThemeContext';
import './admission.scss';
import CardContainer from '../CardContainer/CardContainer';
import TextActionContainer from '../TextActionContainer/TextActionContainer';
import TextImgContainer from '../TextImgContainer/TextImgContainer';
import ImageHolder from '../ImageHolder/ImageHolder';
import ShowingLocations from '../../assets/svg/image-girl-showing-locations.svg';
import Dates from '../../assets/svg/Dates.svg';
import academyInformation from '../../utils/academyInformation.json';

export default function Admission({ academy = 0 }) {
  const { theme } = useContext(ThemeContext);
  const admissionIntroduction =
    academyInformation[academy].admission.introduction;
  const admissionPoints =
    academyInformation[academy].admission['learning points'];
  const admissionInterview =
    academyInformation[academy].admission['interview promise'];

  const learningPoints = useMemo(() =>
    admissionPoints.map((item, index) => (
      <li className={`learning-point--${theme}`} key={index}>
        {item}
      </li>
    ))
  );

  return (
    <div className="admission-wrapper">
      <CardContainer title="The Admission">
        <TextImgContainer
          leftChild={
            <div className="admission-wrapper__text-block">
              <TextActionContainer
                headingLevel={2}
                title="Introduction"
                text={admissionIntroduction}
              />
              <TextActionContainer
                className="points"
                headingLevel={2}
                title="Learning points"
                text={learningPoints}
              />
              <TextActionContainer
                headingLevel={2}
                title="Interview"
                text={admissionInterview}
              />
            </div>
          }
          rightChild={
            <div>
              <ImageHolder className="dates" right image={<Dates />} />
              <ImageHolder right image={<ShowingLocations />} />
            </div>
          }
        />
      </CardContainer>
    </div>
  );
}

Admission.propTypes = {
  academy: PropTypes.number.isRequired,
};
