import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './testimonials-content.scss';
import TestimonialsCard from '../Testimonials_card/TestimonialsCard.js';
import TESTIMONIALS_ENDPOINT from './testimonialsEndpoint.js';

const randomNum = () => {
  return Math.floor(Math.random() * 7);
};

function TestimonialsContent({ academy }) {
  const [showPosts, setShowPosts] = useState(null);
  const [random, setRandom] = useState(randomNum());
  const randomAcademy = 'Random';

  useMemo(() => {
    return setRandom(random);
  }, [random]);

  const getTestimonials = async () => {
    const data = await fetch(TESTIMONIALS_ENDPOINT)
      .then((response) => response.json())
      .then((result) =>
        randomAcademy === academy
          ? setShowPosts(result.slice(random, random + 3))
          : setShowPosts(result)
      )
      .catch((err) => err.message);
    return data;
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className="testimonials-content">
      {showPosts
        ? randomAcademy === academy
          ? showPosts.map((item, index) => (
              <TestimonialsCard item={item} key={index}></TestimonialsCard>
            ))
          : showPosts
              .filter((el) => el.academy === academy)
              .map((item, index) => (
                <TestimonialsCard item={item} key={index}></TestimonialsCard>
              ))
        : null}
    </div>
  );
}

TestimonialsContent.propTypes = {
  academy: PropTypes.string.isRequired,
};

export default TestimonialsContent;
