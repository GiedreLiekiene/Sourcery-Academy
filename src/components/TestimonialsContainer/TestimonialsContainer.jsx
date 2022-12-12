import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './testimonials-container.scss';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard.js';
import TESTIMONIALS_ENDPOINT from './testimonialsEndpoint.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingMessage from '../LoadingMessage/LoadingMessage';
import BoxShadow from '../BoxShadow/BoxShadow';

const randomNum = () => {
  return Math.floor(Math.random() * 7);
};

function TestimonialsContainer({ academy }) {
  const [showPosts, setShowPosts] = useState(null);
  const [random, setRandom] = useState(randomNum);
  const [error, setError] = useState(null);
  const randomAcademy = 'Random';

  const getTestimonials = async () => {
    const data = await fetch(TESTIMONIALS_ENDPOINT)
      .then((response) => response.json())
      .then((result) =>
        randomAcademy === academy
          ? setShowPosts(result.slice(random, random + 3))
          : setShowPosts(result)
      )
      .catch(() => setError('Failed to load...'));
    return data;
  };

  useEffect(() => {
    return setRandom(random);
  }, [random]);

  useEffect(() => {
    getTestimonials();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!showPosts) {
    return <LoadingMessage message="Loading..." />;
  }

  return (
    <div className="testimonials-container">
      {showPosts
        ? randomAcademy === academy
          ? showPosts.map((item, index) => (
              <div className="testimonials-container__card" key={index}>
                <BoxShadow>
                  <TestimonialsCard item={item}></TestimonialsCard>
                </BoxShadow>
              </div>
            ))
          : showPosts
              .filter((el) => el.academy === academy)
              .map((item, index) => (
                <div className="testimonials-container__card" key={index}>
                  <BoxShadow>
                    <TestimonialsCard item={item}></TestimonialsCard>
                  </BoxShadow>
                </div>
              ))
        : null}
    </div>
  );
}

TestimonialsContainer.propTypes = {
  academy: PropTypes.string.isRequired,
};

export default TestimonialsContainer;
