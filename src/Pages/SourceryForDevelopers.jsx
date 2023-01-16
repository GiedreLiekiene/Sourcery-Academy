import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import { ThemeProvider } from '../utils/ThemeContext';
import MediaContainer from '../components/MediaContainer/MediaContainer';

function AcademyDevelopers() {
  return (
    <ThemeProvider theme="secondary">
      <CardContainer title="Schedule" center>
        <ScheduleContainer academy="Sourcery for Developers" />
      </CardContainer>
      <CardContainer title="Media">
        <MediaContainer academy={'developers'} />
      </CardContainer>
    </ThemeProvider>
  );
}
export default AcademyDevelopers;
