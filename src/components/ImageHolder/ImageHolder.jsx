import React from 'react';
import PropTypes from 'prop-types';

export default function ImageHolder({ image }) {
  return <>{image}</>;
}

ImageHolder.propTypes = {
  image: PropTypes.node,
};
