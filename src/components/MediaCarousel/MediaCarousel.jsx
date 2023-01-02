import React, { useState } from 'react';
import './media-carousel.scss';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import VideoPlayer from '../VideoBox/VideoPlayer';

const Arrow = ({ isLeft }) => {
  return (
    <span
      className={isLeft ? 'arrow arrow--left' : 'arrow arrow--right'}
    ></span>
  );
};

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
      <button
        className="carousel__button carousel__button--prev"
        onClick={handlePrevious}
      >
        <Arrow isLeft={true} />
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={handleNext}
      >
        <Arrow isLeft={false} />
      </button>
      {type != 'video' ? (
        <img src={thumbnail} />
      ) : (
        <VideoPlayer videoSrc={src} />
      )}
    </div>
  );
};

Arrow.propTypes = {
  isLeft: PropTypes.bool.isRequired,
};

MediaCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  initialIndex: PropTypes.number,
};

export default MediaCarousel;
