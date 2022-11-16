import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';

const MediaCard = ({ photo, doubleWidth }) => {
  return (
    <div className={'card' + (doubleWidth ? ' doubleWidth' : '')}>
      <div className="card__img">
        <img src={photo} alt="photo" />
      </div>
    </div>
  );
};

MediaCard.propTypes = {
  photo: PropTypes.string.isRequired,
  doubleWidth: PropTypes.bool.isRequired,
};

export default MediaCard;
