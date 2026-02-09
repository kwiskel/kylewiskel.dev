'use client';
import { Article, ContactMail, DarkMode, DesignServices, LightMode, Menu, Work } from '@mui/icons-material';
import { Box, Button, ButtonProps, Fade, IconButton, styled, Toolbar, useTheme } from '@mui/material';
import { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from './ClientThemeProvider';

type props = {
  projectRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  fadeIn: boolean;
};

export default function NavigationBar({ projectRef, workRef, contactRef, fadeIn }: props) {
  const theme = useTheme();
  const { changeMode } = useContext(ThemeContext); // Access the theme state and function
  const [mobileOpen, setMobileOpen] = useState(false);

  type NavButtonProps = ButtonProps & {
    target?: string;
  };

  // if user scrolls -> close mobile nav
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

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

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [mobileNavPosition, setMobileNavPosition] = useState(200);
  useEffect(() => {
    if (menuButtonRef.current) {
      setMobileNavPosition(menuButtonRef.current.getBoundingClientRect().right);
    }
  }, []);

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    // if mobile -> close bar
    if (mobileOpen) setMobileOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fade in={fadeIn} timeout={2000}>
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'space-between' }}>
          <IconButton
            ref={menuButtonRef}
            edge='start'
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ color: 'text.main' }}
          >
            <Menu />
          </IconButton>
          <IconButton onClick={() => changeMode()} sx={{ display: { xs: 'inherit', md: 'none' } }}>
            {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: mobileOpen ? 'flex' : 'none', md: 'flex' },
            position: { xs: 'fixed', md: 'inherit' }, // Use 'fixed' to overlay the box on mobile
            top: { xs: 0, md: 0 },
            left: { md: 0, xs: mobileNavPosition },
            transition: 'opacity 0.5s ease',
            width: { xs: 'fit-content', md: '100%' },
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              border: mobileOpen ? 'none' : `1px solid ${theme.palette.text.primary}`,
              width: 'fit-content',
              borderRadius: '20px',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <NavButton
              startIcon={<DesignServices />}
              sx={{ justifyContent: { xs: 'start', md: 'inherit' } }}
              onClick={() => scrollToRef(projectRef)}
            >
              Projects
            </NavButton>
            <NavButton
              startIcon={<Work />}
              sx={{ justifyContent: { xs: 'start', md: 'inherit' } }}
              onClick={() => scrollToRef(workRef)}
            >
              Work Experience
            </NavButton>
            <NavButton
              startIcon={<ContactMail />}
              sx={{ justifyContent: { xs: 'start', md: 'inherit' } }}
              onClick={() => scrollToRef(contactRef)}
            >
              Contact Me
            </NavButton>
            <NavButton
              startIcon={<Article />}
              component='a'
              href='https://kylewiskel.s3.us-east-2.amazonaws.com/KyleWiskel_Resume.pdf'
              rel='noopener noreferrer'
              target='_blank'
              sx={{ margin: '5px 5px 5px 5px', justifyContent: { xs: 'start', md: 'inherit' } }}
            >
              Resume
            </NavButton>
          </Box>
        </Box>
        <IconButton onClick={() => changeMode()} sx={{ display: { xs: 'none', md: 'inherit' } }}>
          {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </Fade>
  );
}
