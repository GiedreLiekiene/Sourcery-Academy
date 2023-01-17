import React from 'react';
import { ThemeProvider } from '../utils/ThemeContext';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import CardContainer from '../components/CardContainer/CardContainer';
import QuestionContainer from '../components/QuestionContainer/QuestionContainer';
import PersonWithMail from '../assets/svg/image-person-with-mail.svg';

import './questions.scss';

function Questions() {
  return (
    <ThemeProvider theme="primary">
      <TextImgContainer 
        leftChild={
        <CardContainer title="Frequently Asked Questions">
        <QuestionContainer />
      </CardContainer>
        }
        rightChild={
          <div className="questions__image-wrapper">
            <PersonWithMail />
          </div>
        }
        />
    </ThemeProvider>
  );
}

export default Questions;
