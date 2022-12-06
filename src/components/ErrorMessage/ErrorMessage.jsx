import React from 'react';
import PropTypes from 'prop-types';
import './error-message.scss';

const ErrorMessage = ({ error }) => {
  return <div className="error-message">{error}</div>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
