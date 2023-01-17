import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './wave-container.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../utils/ThemeContext';

export default function WaveContainer({ children }) {
    const { theme } = useContext(ThemeContext);
  
    const waveClass = classNames(
      'card-container',
      `wave-container--${theme}`,
    );
    return (
      <section className="wave-container">
        <div className={waveClass}>{children}</div>
      </section>
    );
  }
  
  WaveContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };