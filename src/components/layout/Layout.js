import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './layout.scss';

const cn = classNames.bind(styles);

export default function Layout({ children }) {
  return (
    <div className={cn('layout')}>
      <div className={cn('layout-header')}>HEADER</div>
      <main className={cn('layout-content')}>{children}</main>
      <div className={cn('layout-footer')}>FOOTER</div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
