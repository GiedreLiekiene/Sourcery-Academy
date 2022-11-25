import React from 'react';
import PropTypes from 'prop-types';
import './card-container.scss';
import classNames from 'classnames';

export default function CardContainer({
  title,
  theme = 'primary',
  right = false,
  center = false,
  children,
}) {
  const cardClass = classNames(
    'card-container__title',
    `card-container__title--${theme}`,
    {
      'card-container__title--right': right,
      'card-container__title--center': center,
    }
  );
  return (
    <section className="card-container">
      <h1 className={cardClass}>{title}</h1>
      <div className="card-container__content">{children}</div>
    </section>
  );
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  center: PropTypes.bool,
  alignment: PropTypes.oneOf(['right', 'center']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};
