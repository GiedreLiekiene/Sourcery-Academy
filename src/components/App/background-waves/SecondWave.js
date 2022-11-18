import React from 'react';
import './waves.scss';
import SecondWaveSvg from '../../../assets/svg/background-waves/home-page/SecondWave.svg';

const SecondWave = () => {
  return (
    <div className="waves">
      <SecondWaveSvg className="waves__second-wave" />
    </div>
  );
};

export default SecondWave;
