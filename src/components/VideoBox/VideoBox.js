import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PlayIcon from '../../assets/svg/PlayIcon.svg';
import VideoPlayer from './VideoPlayer';

import './video-box.scss';

const VideoBox = ({ thumbnail, altInfo, stroke, videoSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="video-box">
        <img src={thumbnail} alt={altInfo} />
        <button className="video-box__button" onClick={showModal}>
          <PlayIcon
            className="video-box__button__svg"
            stroke={stroke || '#000000'}
          />
        </button>
      </div>
      {isModalOpen && <VideoPlayer videoSrc={videoSrc} />}
    </>
  );
};

VideoBox.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  altInfo: PropTypes.string,
  stroke: PropTypes.string,
  videoSrc: PropTypes.string.isRequired,
};

export default VideoBox;
