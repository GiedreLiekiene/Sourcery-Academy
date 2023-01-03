import React, { useMemo } from 'react';
import './footer.scss';
import SvgFacebook from '~/assets/svg/icon-facebook.svg';
import SvgTwitter from '~/assets/svg/icon-twitter.svg';
import SvgInstagram from '~/assets/svg/icon-instagram.svg';
import SocialMediaLink from './SocialMediaLink';

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <SocialMediaLink
          address="http://www.facebook.com/Devbridge"
          brand="facebook"
          Icon={SvgFacebook}
        />
        <SocialMediaLink
          address="https://twitter.com/devbridge"
          brand="twitter"
          Icon={SvgTwitter}
        />
        <SocialMediaLink
          address="https://www.instagram.com/devbridge/"
          brand="instagram"
          Icon={SvgInstagram}
        />
      </div>
      <p className="footer__copyright">Copyright © {year} Sourcery Academy</p>
    </footer>
  );
}
