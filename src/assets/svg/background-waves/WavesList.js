import React from 'react';

import FirstWaveSvg from './home-page/FirstWave.svg';
import SecondWaveSvg from './home-page/SecondWave.svg';
import ThirdWaveSvg from './home-page/ThirdWave.svg';
import FourthWaveSvg from './home-page/FourthWave.svg';
import ApplyWaveSvg from './Academy-pages/ApplyWave.svg';
import DatesWaveSvg from './Academy-pages/DatesWave.svg';
import MediaWaveSvg from './Academy-pages/MediaWave.svg';
import ProcessWaveSvg from './Academy-pages/ProcessWave.svg';
import RegisterWaveSvg from './Academy-pages/RegisterWave.svg';
import ScheduleWaveSvg from './Academy-pages/ScheduleWave.svg';
import VideoWaveSvg from './Academy-pages/VideoWave.svg';

const WavesList = (props) => {
  const { name } = props;
  switch (name) {
    case 'first':
      return <FirstWaveSvg {...props} />;
    case 'second':
      return <SecondWaveSvg {...props} />;
    case 'third':
      return <ThirdWaveSvg {...props} />;
    case 'fourth':
      return <FourthWaveSvg {...props} />;
    case 'apply':
      return <ApplyWaveSvg {...props} />;
    case 'dates':
      return <DatesWaveSvg {...props} />;
    case 'media':
      return <MediaWaveSvg {...props} />;
    case 'process':
      return <ProcessWaveSvg {...props} />;
    case 'register':
      return <RegisterWaveSvg {...props} />;
    case 'schedule':
      return <ScheduleWaveSvg {...props} />;
    case 'video':
      return <VideoWaveSvg {...props} />;
    default:
      return;
  }
};

export default WavesList;
