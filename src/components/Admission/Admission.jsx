import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import './admission.scss';
import CardContainer from '../CardContainer/CardContainer';
import TextActionContainer from '../TextActionContainer/TextActionContainer';
import TextImgContainer from '../TextImgContainer/TextImgContainer';
import ImageHolder from '../ImageHolder/ImageHolder';
import ShowingLocations from '../../assets/svg/image-girl-showing-locations.svg';
import academyInformation from '../../utils/academyInformation.json';

export default function Admission({ academy = 'Sourcery for Developers' }) {
  const getApplicationSteps = (academy) => {
    return academyInformation
      .filter((item) => item.academy === academy)
      .map((item) => item.admission)[0];
  };
  const applicationSteps = useMemo(() => getApplicationSteps(academy), []);

  return (
    <div className="admission-wrapper">
      <CardContainer title="The Admission">
        <TextImgContainer
          leftChild={
            <div>
              <TextActionContainer
                headingLevel={2}
                title="Introduction"
                text={applicationSteps.introduction}
              />
              <TextActionContainer
                className="points"
                headingLevel={2}
                title="Learning points"
                text={applicationSteps['learning points'].map(
                  (point, index) => (
                    <li
                      className="admission-wrapper__point--secondary"
                      key={index}
                    >
                      {point}
                    </li>
                  )
                )}
              />
              <TextActionContainer
                headingLevel={2}
                title="Interview"
                text={applicationSteps['interview promise']}
              />
            </div>
          }
          rightChild={
            <div>
              <ImageHolder right image={<ShowingLocations />} />
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
