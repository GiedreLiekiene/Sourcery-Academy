import React, { useState } from 'react';
import './media-carousel.scss';
import PropTypes from 'prop-types';

const MediaCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const length = images.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel-button--prev" onClick={handlePrevious}>
        Previous
      </button>
      <button className="carousel-button--next" onClick={handleNext}>
        Next
      </button>
      <img src={images[index].thumbnail}></img>
    </div>
  );
};

MediaCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default MediaCarousel;
