import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard.js';
import './media-card-container.scss';

function MediaCardContainer() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        'https://sfe-2022-data.netlify.app/static/media.json'
      );
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      {!images ? (
        <h2>Loading...</h2>
      ) : (
        <section>
          <h1>Media</h1>

          <div>
            {images.map((image, index) => (
              <MediaCard
                key={index}
                photo={image.src}
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
