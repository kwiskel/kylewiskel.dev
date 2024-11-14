'use client';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Box, Button, IconButton, Toolbar, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from './ClientThemeProvider';
import Link from 'next/link';

export default function NavigationBar() {
  const theme = useTheme();
  const { isDarkMode, changeMode } = useContext(ThemeContext); // Access the theme state and function

  return (
    <Toolbar>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5%', width: '100%' }}>
        <Button sx={{ color: 'text.primary', '&:hover': { color: 'primary.main', background: 'inherit' } }}>
          Projects
        </Button>
        <Button sx={{ color: 'text.primary', '&:hover': { color: 'primary.main', background: 'inherit' } }}>
          Work Experience
        </Button>
        <Button sx={{ color: 'text.primary', '&:hover': { color: 'primary.main', background: 'inherit' } }}>
          Contact
        </Button>
       <Button
          component={Link}
          href="https://kylewiskel.s3.us-east-2.amazonaws.com/KyleWiskel_Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          sx={{ color: 'text.primary', '&:hover': { color: 'primary.main', background: 'inherit' } }}
        >
          Resume
        </Button>
      </Box>
      <IconButton onClick={() => changeMode()}>
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Toolbar>
  );
}
