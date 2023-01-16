import React from 'react';
import { ThemeProvider } from '../utils/ThemeContext';
import CardContainer from '../components/CardContainer/CardContainer';
import QuestionContainer from '../components/QuestionContainer/QuestionContainer';

function Questions() {
  return (
    <ThemeProvider theme="primary">
      <CardContainer center title="Frequently Asked Questions">
        <QuestionContainer />
      </CardContainer>
    </ThemeProvider>
  );
}

export default Questions;
