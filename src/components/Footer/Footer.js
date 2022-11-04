import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.scss';
import SvgFacebook from '~/assets/svg/icon-facebook.svg';
import SvgTwitter from '~/assets/svg/icon-twitter.svg';
import SvgInstagram from '~/assets/svg/icon-instagram.svg';

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer>
      <div className={cn('social-icons')}>
        <a href="http://www.facebook.com/Devbridge">
          <SvgFacebook className={cn('social-icon social-icon-facebook')} />
        </a>
        <a href="https://twitter.com/devbridge">
          <SvgTwitter className={cn('social-icon social-icon-twitter')} />
        </a>
        <a href="https://www.instagram.com/devbridge/">
          <SvgInstagram className={cn('social-icon social-icon-instagram')} />
        </a>
      </div>
      <p className={cn('copyright')}>Copyright © 2019 Sourcery Academy</p>
    </footer>
  );
}
