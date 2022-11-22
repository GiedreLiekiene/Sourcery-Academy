import React from 'react';
import PropTypes from 'prop-types';
import './card-container.scss';

export default function CardContainer({
  title,
  alignment = 'center',
  theme = 'primary',
  children,
}) {
  return (
    <section className="card-container">
      <h1
        className={`card-container__title card-container__title--${alignment} card-container__title--${theme}`}
      >
        {title}
      </h1>
      <div className="card-container__content">{children}</div>
    </section>
  );
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
  theme: PropTypes.oneOf(['purple', 'blue', 'green', 'red']),
};
