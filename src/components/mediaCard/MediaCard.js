import React from 'react';
import './media-card.scss';
import PropTypes from 'prop-types';
import BoxShadow from '../BoxShadow/BoxShadow';

const MediaCard = ({ imgUrl, altInfo }) => {
  return (
    <BoxShadow className="media-card">
      <img src={imgUrl} alt={altInfo} />
    </BoxShadow>
  );
};

MediaCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  altInfo: PropTypes.string,
};

export default MediaCard;
