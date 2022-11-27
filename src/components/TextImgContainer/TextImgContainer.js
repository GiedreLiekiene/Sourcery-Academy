import React from 'react';
import PropTypes from 'prop-types';
import './text-img-container.scss';
import classNames from 'classnames';

export default function TextImgContainer({
  alignRight = false,
  alignCenter = false,
  leftChild,
  rightChild,
}) {
  const textImgClass = classNames('text-img-container', {
    'text-img-container--right': alignRight,
    'text-img-container--center': alignCenter,
  });

  return (
    <section className={textImgClass}>
      <div className="text-img-container__left">{leftChild}</div>
      <div className="text-img-container__right">{rightChild}</div>
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
