import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';

const MediaCard = ({ photo, doubleWidth }) => {
  return (
    <img
      src={photo}
      alt="photo"
      className={'media-card' + (doubleWidth ? ' double-width' : '')}
    />
  );
};

MediaCard.propTypes = {
  photo: PropTypes.string.isRequired,
  doubleWidth: PropTypes.bool,
};

export default MediaCard;
