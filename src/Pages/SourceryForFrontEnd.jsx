import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import { ThemeProvider } from '../utils/ThemeContext';

function AcademyFrontEnd() {
  return (
    <ThemeProvider theme="tertiary">
      <CardContainer title="Schedule" center>
        <ScheduleContainer academy="Sourcery for Front-End" />
      </CardContainer>
    </ThemeProvider>
  );
}
export default AcademyFrontEnd;
