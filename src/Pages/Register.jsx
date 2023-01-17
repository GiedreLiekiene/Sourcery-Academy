import React from 'react';
import { ThemeProvider } from '~/utils/ThemeContext';
import ApplicationFormScreen from '~/components/ApplicationForm/ApplicationFormScreen';

function Register() {
  return (
    <ThemeProvider theme="primary">
      <ApplicationFormScreen />
    </ThemeProvider>
  );
}

export default Register;
