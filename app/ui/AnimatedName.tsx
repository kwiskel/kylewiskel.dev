import { playfairDisplay } from '@/lib/theme';
import { Box, Typography, TypographyProps } from '@mui/material';
import { motion } from 'motion/react';
import { ForwardedRef, forwardRef } from 'react';

type props = {
  // eslint-disable-next-line no-unused-vars
  setFadeIn: (value: boolean) => void;
};

const words = ['Kyle', 'Wiskel'];

const MotionTypography = motion.create(
  // eslint-disable-next-line react/display-name
  forwardRef((props: TypographyProps, ref: ForwardedRef<HTMLSpanElement>) => <Typography ref={ref} {...props} />),
);

export default function AnimatedName({ setFadeIn }: props) {
  return (
    <>
      {words.map((word, index) => (
        <Box sx={{ marginRight: '10px', display: 'flex' }} key={index}>
          {word.split('').map((char, index) => (
            <MotionTypography
              sx={{ fontSize: { xs: '3.5em', sm: '4em', lg: '5em' }, color: 'text.primary' }}
              fontWeight={700}
              fontFamily={playfairDisplay.style.fontFamily}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.15 }}
              // transition={{ duration: 2, delay: Math.random() }}
              onAnimationComplete={() => {
                if (index === word.length - 1) setFadeIn(true);
              }}
              key={index}
            >
              {char}
            </MotionTypography>
          ))}
        </Box>
      ))}
    </>
  );
}
