import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PlayIcon from '../../assets/svg/PlayIcon.svg';
import VideoPlayer from './VideoPlayer';

import './video-box.scss';

const VideoBox = ({
  thumbnail,
  altInfo,
  stroke,
  videoSrc,
  isPlayable = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = !isPlayable
    ? null
    : () => {
        setIsModalOpen(true);
      };

  const closeModal = () => {
    setIsModalOpen(false);
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
      {isModalOpen && (
        <Modal onClickClose={closeModal}>
          <VideoPlayer videoSrc={videoSrc} />
        </Modal>
      )}
    </>
  );
};

VideoBox.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  altInfo: PropTypes.string,
  stroke: PropTypes.string,
  videoSrc: PropTypes.string.isRequired,
  isPlayable: PropTypes.bool,
};

export default VideoBox;
