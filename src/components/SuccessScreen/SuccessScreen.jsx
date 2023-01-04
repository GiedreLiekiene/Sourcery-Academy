import React from 'react';
import PropTypes from 'prop-types';
import './SuccessScreen.scss';
import CheckMark from '../../assets/svg/image-check-mark.svg';
import PersonWithMail from '../../assets/svg/image-person-with-mail.svg';

function SuccessScreen({ title, gratitude, text }) {
  return (
    <div className="success-screen">
      <h1 className="success-screen__title">{title}</h1>
      <div className="success-screen__content">
        <div className="success-screen__submit-check">
          <CheckMark className="success-screen__check-mark" />
          <h2 className="success-screen__heading">{gratitude}</h2>
          <span className="success-screen__submit-message">{text}</span>
        </div>
        <div className="success-screen__picture">
          <PersonWithMail />
        </div>
      </div>
    </div>
  );
}

SuccessScreen.propTypes = {
  title: PropTypes.string.isRequired,
  gratitude: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SuccessScreen;
