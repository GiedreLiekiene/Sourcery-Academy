import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './video-player.scss';

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);

  return (
    <video ref={videoRef} src={videoSrc} controls className="video-player" />
  );
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default VideoPlayer;
