import React, { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadingMessage from '../LoadingMessage/LoadingMessage.jsx';
import MediaCard from '../MediaCard/MediaCard.js';
import './media-container.scss';
import classnames from 'classnames';
import BoxShadow from '../BoxShadow/BoxShadow.jsx';

const mediaUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
function MediaContainer() {
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(mediaUrl);
        const data = await response.json();
        setImages(data.slice(0, 6));
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
    <div className="media-container">
      {images.map(({ thumbnail }, index) => {
        let extended = index == 1 || index == 5;
        const cardClass = classnames('media-container__item', {
          'media-container__item--extended': extended,
        });
        return (
          <div className={cardClass} key={thumbnail}>
            <BoxShadow>
              <MediaCard imgUrl={thumbnail} />
            </BoxShadow>
          </div>
        );
      })}
    </div>
  );
}

export default MediaContainer;
