import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';

const MediaCard = ({ imgUrl, altInfo }) => {
  return (
    <div className="mediacard">
      <img src={imgUrl} alt={altInfo} />
    </div>
  );
};

MediaCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  altInfo: PropTypes.string,
};

export default MediaCard;
