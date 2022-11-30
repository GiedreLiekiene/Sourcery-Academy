import React, { useState } from 'react';
import './TestimonialsContent.scss';
import TestimonialsCard from '../Testimonials_card/TestimonialsCard.js';

function TestimonialsContent() {
  const [showPosts, setShowPosts] = useState();

  const TESTIMONIALS_ENDPOIND = 'https://www.jurele.lt/testimonials.json';

  let displayData;
  const getTestimonials = async () => {
    const res = await fetch(TESTIMONIALS_ENDPOIND);
    const data = await res.json();
    // Testimonials json -> data

    displayData = data;
    setShowPosts(displayData);
  };

  getTestimonials();

  return (
    <div className="testimonials-content">
      {showPosts
        ? showPosts
            .slice(0, 3)
            .map((item, index) => (
              <TestimonialsCard item={item} key={index}></TestimonialsCard>
            ))
        : null}
    </div>
  );
}

export default TestimonialsContent;
