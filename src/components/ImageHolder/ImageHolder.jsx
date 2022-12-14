import React from 'react';
import PropTypes from 'prop-types';
import './image-holder';
import classNames from 'classnames';

export default function ImageHolder({ image, right = false }) {
  const holderClass = classNames('image-holder', {
    'image-holder--right': right,
  });
  return <div className={holderClass}>{image}</div>;
}

ImageHolder.propTypes = {
  image: PropTypes.node.isRequired,
  right: PropTypes.bool,
};
