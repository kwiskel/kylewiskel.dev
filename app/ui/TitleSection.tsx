import { playfairDisplay } from '@/lib/theme';
import { Cake, DirectionsRun, Pets, SportsHockey } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

const AnimatedHeader = styled(Typography)(({ theme }) => ({
  opacity: 0,
  animation: 'fadeIn 2.5s ease-in forwards', // 2s duration, fade-in
}));

export default function TitleSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        verticalAlign: 'middle',
        margin: '20vh 50px 0px 50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: {
            xs: '0 0 0 10px',
            sm: '0 0 0 100px',
          },
        }}
      >
        <AnimatedHeader
          variant='h1'
          fontFamily={playfairDisplay.style.fontFamily}
          fontWeight='700'
          sx={{ color: 'text.primary', margin: '50px 50px 0px 0px', alignSelf: 'left' }}
        >
          Kyle Wiskel
        </AnimatedHeader>
        <AnimatedHeader variant='h5' sx={{ color: 'text.secondary', margin: '50px 50px 0px 0px', alignSelf: 'center' }}>
          Hey! I&apos;m Kyle Wiskel, a Software Developer and recent Computer Engineering graduate from the University
          of Alberta.
          <br /> I love running <DirectionsRun />, baking <Cake />, cats <Pets />, and the Edmonton Oilers{' '}
          <SportsHockey />!
        </AnimatedHeader>
      </Box>
      <Box
        sx={{
          margin: {
            xs: '0 10px 0 0',
            sm: '0 100px 0 0',
          },
          display: 'flex',
        }}
      >
        <Image src='/profile.png' alt='Profile Picture' width={300} height={300 * 1.225} />
      </Box>
    </Box>
  );
}
