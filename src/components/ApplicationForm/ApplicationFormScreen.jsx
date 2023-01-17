import React, { useContext } from 'react';
import { ThemeContext } from '~/utils/ThemeContext';
import ApplicationForm from '~/components/ApplicationForm/ApplicationForm';
import TextImgContainer from '~/components/TextImgContainer/TextImgContainer';
import FormImage from '~/assets/svg/image-person-with-mail.svg';
import classNames from 'classnames';
import './application-form-screen.scss';

function ApplicationFormScreen() {
  const { theme } = useContext(ThemeContext);
  const screenHeaderClass = classNames('form-title', `form-title--${theme}`);
  return (
    <div>
      <h1 className={screenHeaderClass}>Sourcery Academy Application</h1>
      <TextImgContainer
        leftChild={<ApplicationForm />}
        rightChild={<FormImage />}
      />
    </div>
  );
}

export default ApplicationFormScreen;
