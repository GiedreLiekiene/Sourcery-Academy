import React from 'react';
import PropTypes from 'prop-types';
import './SuccessScreen.scss';
import CheckMark from '../../assets/svg/check-mark.svg';
import PersonWithMail from '../../assets/svg/person-with-mail.svg';
import BlueCircle from '../../assets/svg/blue-circle.svg';
import BrightCircle from '../../assets/svg/bright-circle.svg';

function SuccessScreen({ title, gratitude, text }) {
  return (
    <div className="success-screen">
      <h1 className="success-screen__title">{title}</h1>
      <div className="success-screen__content">
        <div className="success-screen__submit-check">
          <CheckMark className="success-screen__check-mark" />
          <h2>{gratitude}</h2>
          <span>{text}</span>
        </div>
        <div className="success-screen__picture">
          <BrightCircle className="success-screen__bright-circle" />
          <BlueCircle className="success-screen__blue-circle" />
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
