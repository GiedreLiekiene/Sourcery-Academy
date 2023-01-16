import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import faq from '../../utils/frequentlyAskedQuestions.json';
import QuestionCard from '../QuestionCard/QuestionCard';
import BoxShadow from '../BoxShadow/BoxShadow';
import './question-container.scss';

function QuestionContainer() {
  return (
    <div className="question-container">
      {faq.map(({ id, question, answer }) => {
        return (
          <div className="question-container__item" key={id}>
            <BoxShadow>
              <QuestionCard id={id} question={question} answer={answer} />
            </BoxShadow>
          </div>
        );
      })}
      <p className="question-container__other-questions">
        Have other questions?
        <a
          href="mailto:academy@devbridge.com"
          className="question-container__link"
        >
          Send us an email.
        </a>
      </p>
    </div>
  );
}

export default QuestionContainer;
