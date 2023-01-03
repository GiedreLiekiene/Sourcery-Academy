import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PlayIcon from '../../assets/svg/PlayIcon.svg';
import VideoPlayer from './VideoPlayer';

import './video-box.scss';

const VideoBox = ({ thumbnail, altInfo, stroke, videoSrc, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickThumbnail =
    onClick ??
    (() => {
      setIsModalOpen(true);
    });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="video-box">
        <img src={thumbnail} alt={altInfo} />
        <button className="video-box__button" onClick={onClickThumbnail}>
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
  videoSrc: PropTypes.string,
  onClick: PropTypes.func,
};

export default VideoBox;
