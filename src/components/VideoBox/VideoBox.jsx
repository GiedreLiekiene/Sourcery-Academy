import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PlayIcon from '../../assets/svg/PlayIcon.svg';
import VideoPlayer from './VideoPlayer';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

import './video-box.scss';

export const VideoBoxThumbnail = ({ thumbnail, altInfo, onClick }) => {
  const { theme } = useContext(ThemeContext);

  const buttonClass = classNames(
    `video-box--${theme}`,
  );
  return (
    <div className="video-box">
      <img src={thumbnail} alt={altInfo} />
      <button className='video-box__button' onClick={onClick}>
        <PlayIcon className={buttonClass}/>
      </button>
    </div>
  );
};

VideoBoxThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  altInfo: PropTypes.string,
  onClick: PropTypes.func,
};

const VideoBox = ({ thumbnail, altInfo, videoSrc }) => {
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
  videoSrc: PropTypes.string.isRequired,
};

export default VideoBox;
