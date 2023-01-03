import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import VideoBox from '../VideoBox/VideoBox';

const MediaCard = ({ imgUrl, altInfo, videoThumbnail, onClick }) => {
  return (
    <div className="media-card">
      {imgUrl ? (
        <img src={imgUrl} alt={altInfo} onClick={onClick} />
      ) : (
        <VideoBox
          thumbnail={videoThumbnail}
          altInfo={altInfo}
          onClick={onClick}
        />
      )}
    </div>
  );
};

MediaCard.propTypes = {
  imgUrl: PropTypes.string,
  videoThumbnail: PropTypes.string,
  altInfo: PropTypes.string,
  onClick: PropTypes.func,
};

export default MediaCard;
