import React from 'react';
import './background-waves.scss';
import { ReactComponent as Lines } from '/src/assets/svg/background-waves/Lines.svg';

const WavesSvg = () => {
  return (
    <div className="svg-waves">
      <Lines />
    </div>
  );
};

export { WavesSvg };
