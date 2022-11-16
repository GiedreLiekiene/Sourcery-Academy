import React from 'react';
import '../Testimonials_card/TestimonialsCard.scss';
import PropTypes from 'prop-types';

function TestimonialsCard({ item }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={item.photo} alt="photo" />
      </div>
      <div className="card__text">
        <span className="backticks">“</span>
        <p>{item.message}</p>
        <span className="backticks backticks--rotated">“</span>
      </div>
      <div className="card__author">
        <h3>{item.name}</h3>
        <p>{item.academy}</p>
      </div>
    </div>
  );
}

TestimonialsCard.propTypes = {
  item: PropTypes.object,
};

export default TestimonialsCard;
