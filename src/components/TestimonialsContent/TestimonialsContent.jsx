import React, { useEffect, useState } from 'react';
import './testimonials-content.scss';
import TestimonialsCard from '../Testimonials_card/TestimonialsCard.js';
import TESTIMONIALS_ENDPOINT from './testimonialsEndpoint.js';

function TestimonialsContent() {
  const randomNum = Math.floor(Math.random() * 7);
  const [showPosts, setShowPosts] = useState(null);

  const getTestimonials = async () => {
    const data = await fetch(TESTIMONIALS_ENDPOINT)
      .then((response) => response.json())
      .then((result) => setShowPosts(result.slice(randomNum, randomNum + 3)))
      .catch((err) => err.message);
    return data;
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className="testimonials-content">
      {showPosts
        ? showPosts.map((item, index) => (
            <TestimonialsCard item={item} key={index}></TestimonialsCard>
          ))
        : null}
    </div>
  );
}

export default TestimonialsContent;
