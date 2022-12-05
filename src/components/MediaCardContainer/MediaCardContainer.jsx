import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard.js';
import './media-card-container.scss';

const mediaUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
function MediaCardContainer() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(mediaUrl);
      const data = await response.json();
      setImages(data.slice(0, 6));
    };

    fetchImages();
  }, []);

  return (
    <>
      {!images ? (
        <h2>Loading...</h2>
      ) : (
        <section>
          <h1 className="mediacard-container__heading">Media</h1>

          <div className="mediacard-container__gallery">
            {images.map((image, index) => (
              <MediaCard
                key={index}
                photo={image.thumbnail}
                extended={index == 1 || index == 5}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default MediaCardContainer;
