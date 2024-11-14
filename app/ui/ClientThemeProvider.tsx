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
