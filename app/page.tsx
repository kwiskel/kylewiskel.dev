'use client';
import { Box, useTheme } from '@mui/material';
import NavigationBar from './ui/NavigationBar';
import TitleSection from './ui/TitleSection';

export default function Page() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        backgroundImage: (theme) =>
          theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, #ffffff26 1px, transparent 1px)'
            : 'radial-gradient(circle, #12121226 1px, transparent 1px)',
        backgroundSize: '40px 40px' /* Adjust for dot spacing */,
        height: '100vh',
      }}
    >
      <NavigationBar />
      <TitleSection />
    </Box>
  );
}
