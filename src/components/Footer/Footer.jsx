import React, { useMemo } from 'react';
import './footer.scss';
import SvgFacebook from '~/assets/svg/icon-facebook.svg';
import SvgTwitter from '~/assets/svg/icon-twitter.svg';
import SvgInstagram from '~/assets/svg/icon-instagram.svg';

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <a
          href="http://www.facebook.com/Devbridge"
          target="_blank"
          rel="noreferrer"
        >
          <SvgFacebook className="social-media-icon social-media-icon--facebook" />
        </a>
        <a
          href="https://twitter.com/devbridge"
          target="_blank"
          rel="noreferrer"
        >
          <SvgTwitter className="social-media-icon social-media-icon--twitter" />
        </a>
        <a
          href="https://www.instagram.com/devbridge/"
          target="_blank"
          rel="noreferrer"
        >
          <SvgInstagram className="social-media-icon social-media-icon--instagram" />
        </a>
      </div>
      <p className="footer__copyright">Copyright © {year} Sourcery Academy</p>
    </footer>
  );
}
