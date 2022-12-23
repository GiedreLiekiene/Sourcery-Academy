import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import VideoBox from '../VideoBox/VideoBox';

const MediaCard = ({ imgUrl, altInfo, videoThumbnail, videoUrl }) => {
  return (
    <div className="media-card">
      {imgUrl ? (
        <img src={imgUrl} alt={altInfo} />
      ) : (
        <VideoBox
          thumbnail={videoThumbnail}
          videoSrc={videoUrl}
          altInfo={altInfo}
        />
      )}
    </div>
  );
};

MediaCard.propTypes = {
  imgUrl: PropTypes.string,
  videoThumbnail: PropTypes.string,
  videoUrl: PropTypes.string,
  altInfo: PropTypes.string,
};

export default MediaCard;
