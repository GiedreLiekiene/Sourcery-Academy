import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';

const MediaCard = ({ photo, altInfo, doubleWidth }) => {
  return (
    <img
      src={photo}
      alt={altInfo}
      className={'media-card' + (doubleWidth ? ' double-width' : '')}
    />
  );
};

MediaCard.propTypes = {
  photo: PropTypes.string.isRequired,
  doubleWidth: PropTypes.bool,
  altInfo: PropTypes.string,
};

export default MediaCard;
