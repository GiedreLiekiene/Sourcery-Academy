import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import Navbar from '../App/Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <div className={'layout'}>
      <div className={'layout__header'}>
        <Navbar />
      </div>
      <main className={'layout__content'}>{children}</main>
      <div className={'layout__footer'}>FOOTER</div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
