import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ThemeProvider({ children, theme }) {
  const [themeState, setThemeState] = useState(theme);

  return (
    <ThemeContext.Provider value={{ theme: themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};
