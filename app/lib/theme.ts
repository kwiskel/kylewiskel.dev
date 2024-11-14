'use-client';
import { createTheme } from '@mui/material';
import { Roboto, Playfair_Display } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
