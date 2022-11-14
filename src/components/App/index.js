import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module';
import Svg from '~/assets/svg/image.svg';
import { ReactComponent as Lines } from '/src/assets/svg/background-waves/Lines.svg';

const WavesSvg = () => {
  return (
    <div className="svg-waves">
      <Lines />
    </div>
  );
};

export { WavesSvg };

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
