import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconArrow from '~/assets/svg/icon-arrow.svg';
import './question-card-header.scss';
import classNames from 'classnames';

function QuestionCardHeader({ id, question, isExpanded, setIsExpanded }) {
  const iconClass = classNames('question-card-header__icon', {
    'question-card-header__icon--is-expanded': isExpanded,
  });

  return (
    <button
      className="question-card-header__action"
      id={`${id}-header`}
      aria-controls={`${id}-panel`}
      aria-expanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {question}
      <div className={iconClass}>
        <IconArrow />
      </div>
    </button>
  );
}

QuestionCardHeader.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  setIsExpanded: PropTypes.any,
};

export default QuestionCardHeader;
