'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, ReactNode, createContext } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const ThemeContext = createContext({
  isDarkMode: true,
  changeMode: () => {},
});

export default function ClientThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
}
