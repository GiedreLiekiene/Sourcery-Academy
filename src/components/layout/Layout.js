import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.js';
import '../../sass/global.scss';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
