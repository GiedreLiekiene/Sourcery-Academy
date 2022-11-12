import React from 'react';
import './footer.scss';
import SvgFacebook from '~/assets/svg/icon-facebook.svg';
import SvgTwitter from '~/assets/svg/icon-twitter.svg';
import SvgInstagram from '~/assets/svg/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <a
          href="http://www.facebook.com/Devbridge"
          target="_blank"
          rel="noreferrer"
        >
          <SvgFacebook className="footer__social-icon footer__social-icon--facebook" />
        </a>
        <a
          href="https://twitter.com/devbridge"
          target="_blank"
          rel="noreferrer"
        >
          <SvgTwitter className="footer__social-icon footer__social-icon--twitter" />
        </a>
        <a
          href="https://www.instagram.com/devbridge/"
          target="_blank"
          rel="noreferrer"
        >
          <SvgInstagram className="footer__social-icon footer__social-icon--instagram" />
        </a>
      </div>
      <p className="footer__copyright">Copyright © 2022 Sourcery Academy</p>
    </footer>
  );
}
