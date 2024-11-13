'use client';
import { Box, Typography, useTheme } from '@mui/material';
import NavigationBar from './ui/NavigationBar';

export default function Page() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: theme.palette.mode === 'dark' ? 'url(/dark_background.jpg)' : 'url(/light_background.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" sx={{ color: 'text.primary' }}>
          Kyle Wiskel
        </Typography>
      </Box>
    </Box>
  );
}
