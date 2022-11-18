import React from 'react';
import './waves.scss';
import FirstWaveSvg from '../../../assets/svg/background-waves/home-page/FirstWave.svg';

const FirstWave = () => {
  return (
    <div className="waves">
      <FirstWaveSvg className="waves__first-wave" />
    </div>
  );
};

export default FirstWave;
