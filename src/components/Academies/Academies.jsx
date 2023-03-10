import React from 'react';
import '../Academies/academies.scss';
import RoundedArrow from '../../assets/svg/Academies/Rounded-arrow.svg';
import Particles from '../../assets/svg/Academies/Particles.svg';

export default function Academies() {
  const scrollHandler = () => {
    const element = document.getElementsByClassName('section-group')[1];
    element.scrollIntoView();
  };

  return (
    <section className="academies-container">
      <Particles className="academies-container__particles" />
      <div className="academies-container__text">
        <h1 className="academies-container__header">Academies</h1>
        <p className="academies-container__description">
          There are four disciplines available: for developers, testers,
          front-end developers and kids. Academies are taking place in Devbridge
          Lithuanian offices. Students, who are willing to join developers,
          testers or Front-End academies, need to pass the test, prove their
          best to get an invitation to enroll. This rule doesn’t apply to the
          kids (7 to 12 years old) academy, the admission is limited only by
          available number of entries.
        </p>
        <span className="academies-container__vertical-line"></span>
        <button
          onClick={scrollHandler}
          className="academies-container__rounded-arrow"
        >
          <RoundedArrow />
        </button>
      </div>
    </section>
  );
}
