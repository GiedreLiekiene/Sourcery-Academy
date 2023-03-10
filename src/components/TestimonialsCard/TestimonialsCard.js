import React from 'react';
import './testimonials-card.scss';
import PropTypes from 'prop-types';
import Backticks from './Backticks';
import classnames from 'classnames';

function TestimonialsCard({ item: { name, photo, message, academy } }) {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card__img-container">
        <img
          src={photo}
          alt={photo ? 'Person profile photo' : 'No photo'}
          className={classnames('testimonials-card__photo', {
            'testimonials-card__photo--empty': !photo,
          })}
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
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      academy: PropTypes.string.isRequired,
    }),
};

export default TestimonialsCard;
