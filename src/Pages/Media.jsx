import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import MediaContainer from '../components/MediaContainer/MediaContainer';
import { ThemeProvider } from '../utils/ThemeContext';

function Media() {
  return (
    <ThemeProvider theme="primary">
      <div>
        <CardContainer>
          <MediaContainer />
        </CardContainer>
      </div>
    </ThemeProvider>
  );
}

export default Media;
