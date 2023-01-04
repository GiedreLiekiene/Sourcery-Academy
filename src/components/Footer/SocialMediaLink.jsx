import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './social-media-link.scss';

function SocialMediaLink({ address, brand, Icon }) {
  const iconClass = classNames(
    'social-media-icon',
    `social-media-icon--${brand}`
  );
  return (
    <a href={address} target="_blank" rel="noreferrer">
      <Icon className={iconClass} />
    </a>
  );
}

export default SocialMediaLink;

SocialMediaLink.propTypes = {
  address: PropTypes.string.isRequired,
  brand: PropTypes.oneOf(['facebook', 'twitter', 'instagram']).isRequired,
  Icon: PropTypes.func,
};
