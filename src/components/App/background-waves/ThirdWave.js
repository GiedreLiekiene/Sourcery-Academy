import React from 'react';
import './waves.scss';
import ThirdWaveSvg from '../../../assets/svg/background-waves/home-page/ThirdWave.svg';

const ThirdWave = () => {
  return (
    <div className="waves">
      <ThirdWaveSvg className="waves__third-wave" />
    </div>
  );
};

export default ThirdWave;
