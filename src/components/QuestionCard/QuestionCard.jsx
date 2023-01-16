import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuestionCardHeader from './QuestionCardHeader';
import QuestionCardPanel from './QuestionCardPanel';

function QuestionCard({ id, question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <QuestionCardHeader
        id={id}
        question={question}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {isExpanded && (
        <QuestionCardPanel id={id} answer={answer} isExpanded={isExpanded} />
      )}
    </>
  );
}

QuestionCard.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default QuestionCard;
