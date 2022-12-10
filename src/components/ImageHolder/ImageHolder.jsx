import React from 'react';
import PropTypes from 'prop-types';

export default function ImageHolder({ image }) {
  return <div className="image-holder">{image}</div>;
}

ImageHolder.propTypes = {
  image: PropTypes.node,
};
