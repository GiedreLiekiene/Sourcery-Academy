import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import { ThemeProvider } from '../utils/ThemeContext';
import MediaContainer from '../components/MediaContainer/MediaContainer';

function AcademyTesters() {
  return (
    <ThemeProvider theme="quaternary">
      <CardContainer title="Schedule" center>
        <ScheduleContainer academy="Sourcery for Testers" />
      </CardContainer>
      <CardContainer title="Media">
        <MediaContainer academy={'testers'} />
      </CardContainer>
    </ThemeProvider>
  );
}
export default AcademyTesters;
