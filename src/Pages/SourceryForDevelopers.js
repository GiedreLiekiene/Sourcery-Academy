import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import { ThemeProvider } from '../utils/ThemeContext';

function AcademyDevelopers() {
  return (
    <ThemeProvider theme="secondary">
      <CardContainer title="Schedule" center>
        <ScheduleContainer academy="Sourcery for Testers" />
      </CardContainer>
    </ThemeProvider>
  );
}
export default AcademyDevelopers;
