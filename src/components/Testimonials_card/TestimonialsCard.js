import React from 'react';
import '../Testimonials_card/TestimonialsCard.scss';
import PropTypes from 'prop-types';
import Backticks from './Backticks';

function TestimonialsCard({ item: { name, photo, message, academy } }) {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card__img">
        <img
          src={photo}
          alt="Person profile photo"
          className="testimonials-card__photo"
        />
      </div>
      <div className="testimonials-card__review">
        <Backticks />
        <span className="testimonials-card__text">{message}</span>
      </div>
      <div className="testimonials-card__reviewer">
        <span className="testimonials-card__name">{name}</span>
        <span className="testimonials-card__academy">{academy}</span>
      </div>
    </div>
  );
}

TestimonialsCard.propTypes = {
  item:
    PropTypes.object &&
    PropTypes.shape({
      name: PropTypes.string,
      photo: PropTypes.string,
      message: PropTypes.string,
      academy: PropTypes.string,
    }),
};

export default TestimonialsCard;
