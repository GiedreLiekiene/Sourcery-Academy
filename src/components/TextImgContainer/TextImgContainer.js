import React from 'react';
import PropTypes from 'prop-types';
import './text-img-container.scss';

export const TextImgContainer = ({
  alignment = 'center',
  leftChild,
  rightChild,
}) => {
  return (
    <section className={`text-img-container text-img-container--${alignment}`}>
      <div className="text-img-container__left">{leftChild}</div>
      <div className="text-img-container__right">{rightChild}</div>
    </section>
  );
};

TextImgContainer.propTypes = {
  leftChild: PropTypes.node,
  rightChild: PropTypes.node,
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
};
