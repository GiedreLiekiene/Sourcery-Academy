import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import { VideoBoxThumbnail } from '../VideoBox/VideoBox';

const MediaCard = ({ imgUrl, altInfo, videoThumbnail, onClick }) => {
  return (
    <div className="media-card">
      {imgUrl ? (
        <button type="button" className="media-card__button" onClick={onClick}>
          <img src={imgUrl} alt={altInfo} />
        </button>
      ) : (
        <VideoBoxThumbnail
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
