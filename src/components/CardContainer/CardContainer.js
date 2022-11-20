import React from 'react';
import PropTypes from 'prop-types';
import './card-container.scss';

export default function CardContainer({
  title,
  alignment = 'center',
  children,
}) {
  return (
    <section className="card-container">
      <h3
        className={`card-container__title card-container__title--${alignment}`}
      >
        {title}
      </h3>
      <div className="card-container__content">{children}</div>
    </section>
  );
}

CardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
};
