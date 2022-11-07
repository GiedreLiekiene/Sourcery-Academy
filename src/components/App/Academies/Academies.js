import React from 'react';
import styles from '../../../sass/layout/academies.scss';
// import ArrowOne from '../../../assets/svg/Academies/arrow1.svg';
// import ArrowTwo from '../../../assets/svg/Academies/arrow2.svg';
import Arrow from '../../../assets/svg/Academies/Btn-arrow.svg';
import Particles from '../../../assets/svg/Academies/Particles.svg';

export default function Academies() {
  return (
    <div className="container">
      <div className="row">
        <Particles className="particles" />
        <h1>Academies</h1>
        <p>
          There are four disciplines available: for developers, testers,
          front-end developers and kids. Academies are taking place in Devbridge
          Lithuanian offices. Students, who are willing to join developers,
          testers or Front-End academies, need to pass the test, prove their
          best to get an invitation to enroll. This rule doesn’t apply to the
          kids (7 to 12 years old) academy, the admission is limited only by
          available number of entries.
        </p>
        <span className="vertical-line"></span>
        <button className="btn-arrow">
          <Arrow className="arrow" />
        </button>
      </div>
      <div className="row-two">
        <div className="text-block">
          <h2>Sourcery for Developers</h2>
          <p>
            A free of charge three-month cutting-edge technology course,
            available in the Spring and Fall of each year. Students are invited
            to the Devbridge in Kaunas and Vilnius offices to attend lectures
            and create custom projects with the help of software development
            professionals.
          </p>
          <button>Learn more</button>
        </div>
        <div className="img-block">IMG</div>
      </div>
    </div>
  );
}
