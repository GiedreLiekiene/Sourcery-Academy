import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './question-card-panel.scss';

function QuestionCardPanel({ id, answer, isExpanded }) {
  return (
    <section
      className="question-card-panel"
      id={`${id}-panel`}
      aria-labelledby={`${id}-header`}
      hidden={!isExpanded}
    >
      <div className="question-card-panel__answer">
        <p>{answer}</p>
      </div>
    </section>
  );
}

QuestionCardPanel.propTypes = {
  id: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
};

export default QuestionCardPanel;
