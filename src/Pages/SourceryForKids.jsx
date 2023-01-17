import React from 'react';
import WorkInProgress from '../components/WorkInProgress/WorkInProgress';
import { ThemeProvider } from '../utils/ThemeContext';

function AcademyKids() {
  return (
    <ThemeProvider theme="primary">
      <WorkInProgress />
    </ThemeProvider>
  );
}
export default AcademyKids;
