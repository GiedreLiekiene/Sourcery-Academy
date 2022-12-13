import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './video-player.scss';

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener('play', () => {
      console.log('The video is playing');
    });
    video.addEventListener('pause', () => {
      console.log('The video is paused');
    });
  });

  return (
    <video ref={videoRef} src={videoSrc} controls className="video-player" />
  );
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string,
};

export default VideoPlayer;
