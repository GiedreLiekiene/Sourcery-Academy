import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaCard = ({ photo, altInfo, extended }) => {
  const cardClass = classnames('media-card', {
    'media-card--extended': extended,
  });
  return (
    <div className={cardClass}>
      <img src={photo} alt={altInfo} />
    </div>
  );
};
//<img
//   src={photo}
//   alt={altInfo}
//   className={'media-card' + (extended ? ' media-card--extended' : '')}
// />

MediaCard.propTypes = {
  photo: PropTypes.string.isRequired,
  extended: PropTypes.bool,
  altInfo: PropTypes.string,
};

export default MediaCard;
