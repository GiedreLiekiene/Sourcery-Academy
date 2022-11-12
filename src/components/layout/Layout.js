import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className={'layout'}>
      <div className={'layout__header'}>HEADER</div>
      <main className={'layout__content'}>{children}</main>
      <div className={'layout__footer'}>
        <Footer />
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
