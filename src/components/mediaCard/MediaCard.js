import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';

const MediaCard = ({ photo, doubleWidth }) => {
  return (
    <div className={'card' + (doubleWidth ? ' double-width' : '')}>
      <img src={photo} alt="photo" />
    </div>
  );
};

MediaCard.propTypes = {
  photo: PropTypes.string.isRequired,
  doubleWidth: PropTypes.bool,
};

export default MediaCard;
