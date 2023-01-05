import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import VideoBox from '../VideoBox/VideoBox';

const MediaCard = ({ imgUrl, altInfo, videoThumbnail, onClick }) => {
  return (
    <button type="button" className="media-card" onClick={onClick}>
      {imgUrl ? (
        <img src={imgUrl} alt={altInfo} />
      ) : (
        <VideoBox thumbnail={videoThumbnail} altInfo={altInfo} />
      )}
    </button>
  );
};

MediaCard.propTypes = {
  imgUrl: PropTypes.string,
  videoThumbnail: PropTypes.string,
  altInfo: PropTypes.string,
  onClick: PropTypes.func,
};

export default MediaCard;
