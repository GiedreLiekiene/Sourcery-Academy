import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import VideoBox from '../VideoBox/VideoBox';

const MediaCard = ({ imgUrl, altInfo, videoThumbnail, videoUrl, onClick }) => {
  return (
    <div className="media-card" onClick={onClick}>
      {imgUrl ? (
        <img src={imgUrl} alt={altInfo} />
      ) : (
        <VideoBox
          thumbnail={videoThumbnail}
          videoSrc={videoUrl}
          altInfo={altInfo}
          isPlayable={false}
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
  onClick: PropTypes.func,
};

export default MediaCard;
