'use client';
import { darkTheme, lightTheme } from '@/lib/theme';
import { ThemeProvider } from '@mui/material/styles';
import { useState, ReactNode, createContext } from 'react';

export const ThemeContext = createContext({
  isDarkMode: true,
  changeMode: () => {},
});

export default function ClientThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeMode }}>
      <ThemeProvider theme={theme}>
        <body
          style={{
            backgroundColor: theme.palette.background.default,
            backgroundImage:
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, #ffffff26 1px, transparent 1px)'
                : 'radial-gradient(circle, #12121226 1px, transparent 1px)',
            backgroundSize: '40px 40px' /* Adjust for dot spacing */,
          }}
        >
          {children}
        </body>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
