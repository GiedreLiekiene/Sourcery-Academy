import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './video-player.scss';

function VideoPlayer({ videoSrc }) {
  return <video src={videoSrc} controls className="video-player" />;
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default VideoPlayer;
