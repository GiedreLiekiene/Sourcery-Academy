import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({ isModalOpen, isModalClose, children, min, max }) => {
  const closeOnEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      isModalClose();
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
    'modal-container__content--max': max,
  });

  return isModalOpen
    ? ReactDOM.createPortal(
        <div className="modal-container">
          <button className="modal-container__overlay" onClick={isModalClose}></button>
          <div className={modalClass}>{children}</div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  min: PropTypes.bool,
  max: PropTypes.bool,
};
