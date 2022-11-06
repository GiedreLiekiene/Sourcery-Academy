import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './layout.scss';

const cn = classNames.bind(styles);

export default function Layout({ children }) {
  return (
    <div className={cn('container')}>
      <div className={cn('header')}></div>
      <main className={cn('content')}>{children}</main>
      <div className={cn('footer')}></div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
