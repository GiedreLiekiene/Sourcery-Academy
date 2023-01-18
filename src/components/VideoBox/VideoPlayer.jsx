import PropTypes from 'prop-types';
import React from 'react';
import './video-player.scss';

function VideoPlayer({ videoSrc }) {
  return (
    <video autoPlay src={videoSrc} controls muted className="video-player" />
  );
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default VideoPlayer;
