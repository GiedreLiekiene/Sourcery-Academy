import React, { useState } from 'react';
import './media-carousel.scss';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import VideoPlayer from '../VideoBox/VideoPlayer';

const MediaCarousel = ({ images, initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);
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
        <VideoPlayer videoSrc={src} />
      )}
    </div>
  );
};

MediaCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  initialIndex: PropTypes.number,
};

export default MediaCarousel;
