import React from 'react';
import PropTypes from 'prop-types';
import './error-message.scss';

const ErrorMessage = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
