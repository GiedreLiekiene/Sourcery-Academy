import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './text-button-container';

export default function TextButtonContainer({
  title,
  text,
  alignRight = false,
  headingLevel = 1,
}) {
  const textButtonContainerClass = classNames('text-button-container', {
    'text-button-container--right': alignRight,
  });
  const titleClass = classNames(
    'text-button-container__title',
    `text-button-container__title--h${headingLevel}`,
    {
      'text-button-container__title--right': alignRight,
    }
  );
  const textClass = classNames('text-button-container__text', {
    'text-button-container__text--right': alignRight,
  });

  const HeadingTag = `h${headingLevel}`;
  return (
    <div className={textButtonContainerClass}>
      <HeadingTag className={titleClass}>{title}</HeadingTag>
      <p className={textClass}>{text}</p>
      <div className="text-button-container__button"></div>
    </div>
  );
}

TextButtonContainer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};