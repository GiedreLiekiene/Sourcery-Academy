import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({ onClickClose, children, min, med, max }) => {
  const closeOnEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClickClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEsc);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEsc);
    };
  }, []);

  const modalClass = classNames('modal-container__content', {
    'modal-container__content--min': min,
    'modal-container__content--med': med,
    'modal-container__content--max': max,
  });

  return ReactDOM.createPortal(
    <div className="modal-container">
      <button
        className="modal-container__overlay"
        onClick={onClickClose}
      ></button>
      <div className={modalClass}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClickClose: PropTypes.func.isRequired,
  min: PropTypes.bool,
  med: PropTypes.bool,
  max: PropTypes.bool,
};
