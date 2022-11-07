import React from 'react';
import '../../../sass/layout/academies.scss';
import Arrow from '../../../assets/svg/Academies/Btn-arrow.svg';
import Particles from '../../../assets/svg/Academies/Particles.svg';
import Developers from '../../../assets/svg/Academies/Developers.svg';
import DevParticles from '../../../assets/svg/Academies/Dev_particles.svg';
import Testers from '../../../assets/svg/Academies/Testers.svg';
import TestParticles from '../../../assets/svg/Academies/Test_particles.svg';
import Kids from '../../../assets/svg/Academies/Kids.svg';
import KidsParticles from '../../../assets/svg/Academies/Kids_particles.svg';
import Frontend from '../../../assets/svg/Academies/Frontend.svg';
import FrontParticles from '../../../assets/svg/Academies/Front_particles.svg';

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
      <div className="row-secondary">
        <div className="text-block-start">
          <DevParticles className="particles-left" />
          <h2>Sourcery for Developers</h2>
          <p className="p-start">
            A free of charge three-month cutting-edge technology course,
            available in the Spring and Fall of each year. Students are invited
            to the Devbridge in Kaunas and Vilnius offices to attend lectures
            and create custom projects with the help of software development
            professionals.
          </p>
          <button className="btn-learn">Learn more</button>
        </div>
        <div className="img-block">
          <Developers className="img" />
        </div>
      </div>
      <div className="row-secondary">
        <div className="img-block">
          <Testers className="img" />
        </div>
        <div className="text-block-end">
          <TestParticles className="particles-right" />
          <h2>Sourcery for Testers</h2>
          <p className="p-end">
            Top-notch studies for the future Test Engineers. Students join the
            Devbridge team as a paid employee for the Academy period (two
            months) to learn and work. Ones who finish the Academy successfully
            are invited to continue employment on full time.
          </p>
          <button className="btn-learn">Learn more</button>
        </div>
      </div>
      <div className="row-secondary">
        <div className="img-block">
          <Frontend className="img" />
        </div>
        <div className="text-block-end">
          <FrontParticles className="particles-right" />
          <h2>Sourcery for Front-End</h2>
          <p className="p-end">
            Start your career in software development with the intense program
            at Sourcery for Front-End Developers. Complete the admission and
            enter our free of charge two-month academy this autumn in Vilnius to
            learn from our top specialists.
          </p>
          <button className="btn-learn">Learn more</button>
        </div>
      </div>
      <div className="row-secondary start">
        <div className="text-block-start">
          <KidsParticles className="particles-left" />
          <h2>Sourcery for Kids</h2>
          <p className="p-start">
            Sourcery for Kids seeks to educate kids giving them opportunity to
            learn and apply technological product development skills. For the
            entire academic year, the children will study key aspects of
            programming, from logical concepts and functions, through to
            variables, sequences, coordinates, and movement.
          </p>
          <button className="btn-learn">Learn more</button>
        </div>
        <div className="img-block">
          <Kids className="img" />
        </div>
      </div>
    </div>
  );
}
