import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';

export default function ContactSection() {
  const theme = useTheme();

  return (
    <Box display='flex' flexDirection='column' alignContent='center'>
      <Box display='flex' justifyContent='center'>
        <IconButton
          sx={{
            fontSize: '5em',
            padding: '0.5em',
            '&:hover': {
              background: 'inherit',
            },
          }}
          href='https://github.com/kwiskel'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='GitHub'
        >
          <GitHub fontSize='inherit' />
        </IconButton>
        <IconButton
          sx={{
            fontSize: '5em',
            padding: '0.5em',
            '&:hover': {
              background: 'inherit',
            },
          }}
          href='https://www.linkedin.com/in/kylewiskel/'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='LinkedIn'
        >
          <LinkedIn
            fontSize='inherit'
            // sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .9)' : '#0a66c2') }}
          />
        </IconButton>
        <IconButton
          sx={{
            fontSize: '5em',
            padding: '0.5em',
            '&:hover': {
              background: 'inherit',
            },
          }}
          href='mailto:kwiskel@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Email'
        >
          <Email fontSize='inherit' />
        </IconButton>
      </Box>
      <Typography
        variant='body1'
        sx={{
          color: 'text.secondary',
          textDecoration: 'none',
          margin: '25px 0px 50px 0px',
          alignSelf: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        component={'a'}
        href='https://github.com/kwiskel/kylewiskel.dev'
        rel='noopener noreferrer'
        target='_blank'
      >
        @ 2024 Kyle Wiskel
      </Typography>
    </Box>
  );
}
