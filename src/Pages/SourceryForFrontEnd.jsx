import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import { ThemeProvider } from '../utils/ThemeContext';
import MediaContainer from '../components/MediaContainer/MediaContainer';

function AcademyFrontEnd() {
  return (
    <ThemeProvider theme="tertiary">
      <CardContainer title="Schedule" center>
        <ScheduleContainer academy="Sourcery for Front-End" />
      </CardContainer>
      <CardContainer title="Media">
        <MediaContainer academy={'frontend'} />
      </CardContainer>
    </ThemeProvider>
  );
}
export default AcademyFrontEnd;
