import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PlayIcon from '../../assets/svg/PlayIcon.svg';
import VideoPlayer from './VideoPlayer';

import './video-box.scss';

export const VideoBoxThumbnail = ({ thumbnail, altInfo, stroke, onClick }) => {
  return (
    <div className="video-box">
      <img src={thumbnail} alt={altInfo} />
      <button className="video-box__button" onClick={onClick}>
        <PlayIcon
          className="video-box__button__svg"
          stroke={stroke || '#000000'}
        />
      </button>
    </div>
  );
};

VideoBoxThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  altInfo: PropTypes.string,
  stroke: PropTypes.string,
  onClick: PropTypes.func,
};

const VideoBox = ({ thumbnail, altInfo, stroke, videoSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickThumbnail = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <VideoBoxThumbnail
        thumbnail={thumbnail}
        altInfo={altInfo}
        stroke={stroke}
        onClick={onClickThumbnail}
      />
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
};

export default VideoBox;
