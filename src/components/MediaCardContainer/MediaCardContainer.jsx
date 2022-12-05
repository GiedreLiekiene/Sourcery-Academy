import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard.js';
import './media-card-container.scss';

const mediaUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
function MediaCardContainer() {
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
    return <h2 className="mediacard-container__error">{error}</h2>;
  }

  if (!images) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section>
        <h1 className="mediacard-container__heading">Media</h1>

        <div className="mediacard-container__gallery">
          {images.map(({ thumbnail }, index) => (
            <MediaCard
              key={thumbnail}
              photo={thumbnail}
              extended={index == 1 || index == 5}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MediaCardContainer;
