import React, { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadingMessage from '../LoadingMessage/LoadingMessage.jsx';
import MediaCard from '../MediaCard/MediaCard.js';
import './media-container.scss';
import classnames from 'classnames';
import BoxShadow from '../BoxShadow/BoxShadow.jsx';
import MediaCarousel from '../MediaCarousel/MediaCarousel.jsx';
import Modal from '../Modal/Modal.jsx';

const mediaUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
function MediaContainer() {
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);

  const [carouselInitialIndex, setCarouselInitialIndex] = useState(null);

  const showCarousel = (initialIndex) => {
    setCarouselInitialIndex(initialIndex);
  };

  const closeCarousel = () => {
    setCarouselInitialIndex(null);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(mediaUrl);
        const data = await response.json();

        setImages(data);
      } catch (error) {
        setError('Failed to load...');
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!images) {
    return <LoadingMessage message="Loading..." />;
  }

  return (
    <>
      <div className="media-container">
        {images.slice(0, 6).map(({ thumbnail, src, type }, index) => {
          let extended = index == 1 || index == 5;
          const cardClass = classnames('media-container__item', {
            'media-container__item--extended': extended,
          });
          return (
            <div className={cardClass} key={thumbnail}>
              <BoxShadow>
                {type === 'video' ? (
                  <MediaCard
                    videoThumbnail={thumbnail}
                    videoUrl={src}
                    onClick={() => showCarousel(index)}
                  />
                ) : (
                  <MediaCard
                    imgUrl={thumbnail}
                    onClick={() => showCarousel(index)}
                  />
                )}
              </BoxShadow>
            </div>
          );
        })}
      </div>
      {carouselInitialIndex !== null && (
        <Modal onClickClose={closeCarousel}>
          <MediaCarousel images={images} initialIndex={carouselInitialIndex} />
        </Modal>
      )}
    </>
  );
}

export default MediaContainer;
