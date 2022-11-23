import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';

const MediaCard = ({ photo, altInfo, extended }) => {
  return (
    <img
      src={photo}
      alt={altInfo}
      className={'media-card' + (extended ? ' media-card--extended' : '')}
    />
  );
};

MediaCard.propTypes = {
  photo: PropTypes.string.isRequired,
  extended: PropTypes.bool,
  altInfo: PropTypes.string,
};

export default MediaCard;
