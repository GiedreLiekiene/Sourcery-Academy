import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module';
import Svg from '~/assets/svg/image.svg';

const cn = classNames.bind(styles);

export default function App({ prop }) {
  const charCount = prop.length;

  return (
    <div className={cn('wrapper')}>
      <div className={cn('content')}>
        <Svg className={cn('image')} />
        <pre className={cn('helloworld')} style={{ '--count': charCount }}>
          {prop}
        </pre>
      </div>
    </div>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
