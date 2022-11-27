import React from 'react';
import PropTypes from 'prop-types';
import './text-img-container.scss';
import classNames from 'classnames';

export default function TextImgContainer({
  alignRight = false,
  alignCenter = false,
  textRight = false,
  leftChild,
  rightChild,
}) {
  const textImgClass = classNames('text-img-container', {
    'text-img-container--right': alignRight,
    'text-img-container--center': alignCenter,
  });
  const leftChildTextSide = classNames('text-img-container__left', {
    'text-img-container__left--text-right': textRight,
  });
  const rightChildTextSide = classNames('text-img-container__right', {
    'text-img-container__right--text-right': textRight,
  });
  return (
    <section className={textImgClass}>
      <div className={leftChildTextSide}>{leftChild}</div>
      <div className={rightChildTextSide}>{rightChild}</div>
    </section>
  );
}

TextImgContainer.propTypes = {
  leftChild: PropTypes.node.isRequired,
  rightChild: PropTypes.node.isRequired,
  alignRight: PropTypes.bool,
  alignCenter: PropTypes.bool,
  textRight: PropTypes.bool,
};
