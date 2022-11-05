import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './layout.scss';

const cn = classNames.bind(styles);

export default function Layout({ children }) {
  return <div className={cn('main')}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
