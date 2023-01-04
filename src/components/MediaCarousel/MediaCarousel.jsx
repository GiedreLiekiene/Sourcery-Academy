import React, { useState } from 'react';
import './media-carousel.scss';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import VideoPlayer from '../VideoBox/VideoPlayer';
import classnames from 'classnames';

const Arrow = ({ left, right }) => {
  const arrowClass = classnames('carousel__arrow', {
    'carousel__arrow--left': left,
    'carousel__arrow--right': right,
  });
  return <span className={arrowClass}></span>;
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

  // const closeCarousel = () => {
  //   setIndex(initialIndex);
  // };

  let { src, type } = images[index];

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--prev"
        onClick={handlePrevious}
      >
        <div className="carousel__button__arrow">
          <Arrow left={true} />
        </div>
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={handleNext}
      >
        <div className="carousel__button__arrow">
          <Arrow right={true} />
        </div>
      </button>
      {/* <button
        className="carousel__button carousel__button--close"
        onclick={closeCarousel}
      >
        <div className="carousel__button--close-icon">
          <span className="carousel__button--close-icon">X</span>
        </div>
      </button> */}
      {type !== 'video' ? (
        <img src={src} className="carousel__image" />
      ) : (
        <VideoPlayer videoSrc={src} />
      )}
    </div>
  );
};

Arrow.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
};

MediaCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  initialIndex: PropTypes.number,
};

export default MediaCarousel;
