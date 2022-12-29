import React, { useState } from 'react';
import './media-carousel.scss';
import PropTypes from 'prop-types';
import VideoBox from '../VideoBox/VideoBox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MediaCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const length = images.length;

  if (length === 0) {
    return <ErrorMessage message="Cannot display gallery without images" />;
  }

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  let { thumbnail, src, type } = images[index];
  return (
    <div className="carousel">
      <button className="carousel-button--prev" onClick={handlePrevious}>
        Previous
      </button>
      <button className="carousel-button--next" onClick={handleNext}>
        Next
      </button>
      {type != 'video' ? (
        <img src={thumbnail} />
      ) : (
        <VideoBox videoSrc={src} thumbnail={thumbnail} />
      )}
    </div>
  );
};

MediaCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default MediaCarousel;
