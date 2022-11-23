import React from 'react';
import PropTypes from 'prop-types';
import './text-img-container.scss';

export const TextImgContainer = ({
  alignment = 'center',
  textSide = 'text-left',
  leftChild,
  rightChild,
}) => {
  return (
    <section className={`text-img-container text-img-container--${alignment}`}>
      <div
        className={`text-img-container__left text-img-container__left--${textSide}`}
      >
        {leftChild}
      </div>
      <div
        className={`text-img-container__right text-img-container__right--${textSide}`}
      >
        {rightChild}
      </div>
    </section>
  );
};

TextImgContainer.propTypes = {
  leftChild: PropTypes.node.isRequired,
  rightChild: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
  textSide: PropTypes.oneOf(['text-left', 'text-right']),
};
