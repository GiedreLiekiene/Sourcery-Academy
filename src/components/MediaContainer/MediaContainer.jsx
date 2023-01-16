import React, { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadingMessage from '../LoadingMessage/LoadingMessage.jsx';
import MediaCard from '../MediaCard/MediaCard.js';
import './media-container.scss';
import classnames from 'classnames';
import BoxShadow from '../BoxShadow/BoxShadow.jsx';
import MediaCarousel from '../MediaCarousel/MediaCarousel.jsx';
import Modal from '../Modal/Modal.jsx';
import PropTypes from 'prop-types';
import useIsWindowWiderThan from './useIsWindowWiderThan.js';

const mediaUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
function MediaContainer({ academy, itemlimit, shouldUseExtended }) {
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);

  const [carouselInitialIndex, setCarouselInitialIndex] = useState(null);
  const isDesktopCarousel = useIsWindowWiderThan(768);

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
        let data = await response.json();

        if (academy) {
          data = data.filter((item) => item.academy === academy);
          data = data.slice(0, 6);
        }

        if (itemlimit) {
          data = data.slice(0, itemlimit);
        }

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

  return isDesktopCarousel ? (
    <>
      <div className="media-container">
        {images.map(({ thumbnail, type }, index) => {
          let extended = shouldUseExtended && (index == 1 || index == 5);

          const cardClass = classnames('media-container__item', {
            'media-container__item--extended': extended,
          });
          return (
            <div className={cardClass} key={thumbnail}>
              <BoxShadow>
                {type === 'video' ? (
                  <MediaCard
                    videoThumbnail={thumbnail}
                    onClick={() => {
                      showCarousel(index);
                    }}
                  />
                ) : (
                  <MediaCard
                    imgUrl={thumbnail}
                    onClick={() => {
                      showCarousel(index);
                    }}
                  />
                )}
              </BoxShadow>
            </div>
          );
        })}
      </div>
      {carouselInitialIndex !== null && (
        <Modal onClickClose={closeCarousel} med>
          <MediaCarousel
            images={images}
            initialIndex={carouselInitialIndex}
            onClickClose={closeCarousel}
          />
        </Modal>
      )}
    </>
  ) : (
    <div className="media-container--mobile">
      <BoxShadow>
        <MediaCarousel images={images.slice(0, 6)} initialIndex={0} />
      </BoxShadow>
    </div>
  );
}

MediaContainer.propTypes = {
  academy: PropTypes.string,
  itemlimit: PropTypes.number,
  shouldUseExtended: PropTypes.bool,
};

export default MediaContainer;
