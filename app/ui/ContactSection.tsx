import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { RefObject } from 'react';
type props = {
  ref: RefObject<HTMLDivElement | null>;
};

export default function ContactSection({ ref }: props) {
  return (
    <Box display='flex' flexDirection='column' alignContent='center' ref={ref}>
      <Box display='flex' justifyContent='center'>
        <IconButton
          sx={{
            fontSize: '3em',
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
            fontSize: '3em',
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
          <LinkedIn fontSize='inherit' />
        </IconButton>
        <IconButton
          sx={{
            fontSize: '3em',
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
          margin: '25px 0px 0px 0px',
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
        @ 2026 Kyle Wiskel
      </Typography>
    </Box>
  );
}
