import React from 'react';
import './SuccessScreen.scss';
import CheckMark from '../../assets/svg/check-mark.svg';
import PersonWithMail from '../../assets/svg/person-with-mail.svg';
import BlueCircle from '../../assets/svg/blue-circle.svg';
import BrightCircle from '../../assets/svg/bright-circle.svg';

function SuccessScreen() {
  return (
    <div className="success-screen">
      <h1 className="success-screen__title">Sourcery Academy Application</h1>
      <div className="success-screen__content">
        <div className="success-screen__submit-check">
          <CheckMark className="success-scree__check-mark" />
          <h2>Thank you!</h2>
          <span>Your form was submited</span>
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
export default SuccessScreen;
