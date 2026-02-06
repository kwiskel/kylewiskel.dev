import { Box, Fade } from '@mui/material';
import Image from 'next/image';
import profile from '../../public/profile.png';
import AnimatedName from './AnimatedName';
import AnimatedText from './AnimatedText';

type props = {
  fadeIn: boolean;
  setFadeIn: (value: boolean) => void;
};

export default function TitleSection({ fadeIn, setFadeIn }: props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
        justifyContent: 'center',
        verticalAlign: 'middle',
        margin: {
          xs: '100px 0px 0px 0px',
          md: '200px 100px 0px 100px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: {
            xs: '100%',
            lg: '60%',
          },
          justifyContent: 'center',
          alignSelf: 'center',
          maxWidth: '600px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '0px 0px 25px 0px',
            alignContent: {
              xs: 'center',
              lg: 'start',
            },
          }}
        >
          <AnimatedName setFadeIn={setFadeIn} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <AnimatedText
            text="Hello! I'm Kyle Wiskel, a <b>Full</b> <b>Stack</b> <b>Developer</b>, a half marathon runner (2025 highlights: Vancouver, Banff, & Edmonton),
            a skier, an avid tent camper, and a travel lover (last stops Japan, Iceland)."
          />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '20px' }}>
          <AnimatedText
            text='I have a <b>BSc</b> <b>in</b> <b>Computer</b> <b>Engineering</b> from the University of Alberta
            and 3 years of professional software development experience!'
          />
        </Box>
      </Box>
      <Fade in={fadeIn} timeout={2000}>
        <Box
          sx={{
            display: 'flex',
            width: {
              xs: '100%',
              lg: '50%',
            },
            margin: {
              xs: '25px 0px 0px 0px',
              lg: '0px 0px 0px 0px',
            },
            justifyContent: {
              xs: 'center',
              lg: 'center',
            },
            alignItems: 'center',
          }}
        >
          <Image
            src={profile}
            alt='Profile Picture'
            sizes='300px'
            style={{
              width: '300px',
              height: 'auto', // Automatically adjusts height to maintain aspect ratio
            }}
          />
        </Box>
      </Fade>
    </Box>
  );
}
