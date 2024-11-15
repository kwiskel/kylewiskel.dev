'use client';
import { Article, ContactMail, DarkMode, DesignServices, LightMode, Work } from '@mui/icons-material';
import { Box, Button, ButtonProps, IconButton, styled, Toolbar, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from './ClientThemeProvider';

export default function NavigationBar() {
  const theme = useTheme();
  const { changeMode } = useContext(ThemeContext); // Access the theme state and function

  type NavButtonProps = ButtonProps & {
    target?: string;
  };

  const NavButton = styled(Button)<NavButtonProps>(({ theme }) => ({
    padding: '5px 15px',
    margin: '5px 0px 5px 5px',
    border: `1px solid ${theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'}00`,
    borderRadius: '20px',
    color: theme.palette.text.primary,
    transition: 'background-color 0.5s ease, border 0.5s ease', // Smooth transition for hover
    '&:hover': {
      border: `1px solid ${theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'}26`,
    },
  }));

  return (
    <Toolbar>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '25px' }}>
        <Box
          sx={{
            display: 'flex',
            border: `1px solid ${theme.palette.text.primary}`,
            width: 'fit-content',
            borderRadius: '20px',
          }}
        >
          <NavButton startIcon={<DesignServices />}>Projects</NavButton>
          <NavButton startIcon={<Work />}>Work Experience</NavButton>
          <NavButton startIcon={<ContactMail />}>Contact</NavButton>
          <NavButton
            startIcon={<Article />}
            component='a'
            href='https://kylewiskel.s3.us-east-2.amazonaws.com/KyleWiskel_Resume.pdf'
            rel='noopener noreferrer'
            target='_blank'
            sx={{ margin: '5px 5px 5px 5px' }}
          >
            Resume
          </NavButton>
        </Box>
      </Box>
      <IconButton onClick={() => changeMode()}>
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Toolbar>
  );
}
