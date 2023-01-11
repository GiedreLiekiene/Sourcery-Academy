import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './text-action-container';
import { ThemeContext } from '../../utils/ThemeContext';

export default function TextActionContainer({
  title,
  forceWrapTitle = false,
  text,
  alignRight = false,
  headingLevel = 1,
}) {
  const { theme } = useContext(ThemeContext);

  const textActionContainerClass = classNames('text-action-container', {
    'text-action-container--right': alignRight,
  });
  const titleClass = classNames(
    'text-action-container__title',
    `text-action-container__title--h${headingLevel}`,
    `text-action-container__title--${theme}`,
    {
      'text-action-container__title--right': alignRight,
      'text-action-container__title--wrap': forceWrapTitle,
    }
  );
  const textClass = classNames('text-action-container__text', {
    'text-action-container__text--right': alignRight,
  });
  const actionClass = classNames(
    'text-action-container__action',
    `text-action-container__action--${theme}`
  );

  const HeadingTag = `h${headingLevel}`;
  return (
    <div className={textActionContainerClass}>
      <HeadingTag className={titleClass}>{title}</HeadingTag>
      <p className={textClass}>{text}</p>
      <div className={actionClass}></div>
    </div>
  );
}

TextActionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  forceWrapTitle: PropTypes.bool,
};
