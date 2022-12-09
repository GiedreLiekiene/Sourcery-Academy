import React from 'react';
import PropTypes from 'prop-types';
import './loading-message.scss';

const LoadingMessage = ({ message }) => {
  return <div className="loading-message">{message}</div>;
};

LoadingMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default LoadingMessage;
