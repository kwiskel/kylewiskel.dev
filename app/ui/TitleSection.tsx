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
          {/* <Typography
            fontFamily={playfairDisplay.style.fontFamily}
            fontWeight='700'
            sx={{
              color: 'text.primary',
              margin: '0px 0px 25px 0px',
              alignSelf: {
                xs: 'center',
                lg: 'start',
              },
              fontSize: { xs: '3.5em', sm: '4em', lg: '5em' },
            }}
          >
            Kyle Wiskel
          </Typography> */}
          <AnimatedName setFadeIn={setFadeIn} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <AnimatedText
            text="Hello! I'm Kyle Wiskel, a <b>Full</b> <b>Stack</b> <b>Developer</b>, a half marathon runner (Edmonton Marathon 2024),
            an animal shelter volunteer, a baker, and a travel lover (last stops: Iceland, Hawaii)."
          />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '20px' }}>
          <AnimatedText
            text='With a <b>BSc</b> <b>in</b> <b>Computer</b> <b>Engineering</b> from the University of Alberta, I wear my iron ring as a symbol of pride
            and a reminder to live by a high standard of professional and ethical conduct!'
          />
        </Box>
        {/* <Typography
            variant='body1'
            sx={{ color: 'text.primary', alignSelf: 'center', fontWeight: '300', wordWrap: 'break-word' }}
          >
            Hello! I&apos;m Kyle Wiskel, a<b> Full Stack Developer</b>, a half marathon runner (Edmonton Marathon 2024),
            an animal shelter volunteer, a baker, and a travel lover (last stops: Iceland, Hawaii). <br /> <br /> With a
            <b> BSc in Computer Engineering</b> from the University of Alberta, I wear my iron ring as a symbol of pride
            and a reminder to live by a high standard of professional and ethical conduct!
          </Typography> */}
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
