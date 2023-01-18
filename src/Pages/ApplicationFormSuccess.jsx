import React from 'react';
import SuccessScreen from '../components/SuccessScreen/SuccessScreen';

function ApplicationFormSuccess() {
  const title = 'Sourcery Academy Application';
  const gratitude = 'Thank you!';
  const text = 'Your form was submitted';

  return <SuccessScreen title={title} gratitude={gratitude} text={text} />;
}
export default ApplicationFormSuccess;
