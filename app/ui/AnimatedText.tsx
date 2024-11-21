import { Box, Typography, TypographyProps } from '@mui/material';
import { motion } from 'motion/react';
import { ForwardedRef, forwardRef } from 'react';

type props = {
  text: string;
};

const MotionTypography = motion.create(
  // eslint-disable-next-line react/display-name
  forwardRef((props: TypographyProps, ref: ForwardedRef<HTMLSpanElement>) => <Typography ref={ref} {...props} />),
);

export default function AnimatedText({ text }: props) {
  const renderWord = (text: string) => {
    // You can use a regex or manual parsing to transform strings into JSX components
    const parsedWord = text.split(' ').map((item, idx) => {
      if (item.startsWith('<b>') || item.endsWith('</b>')) {
        return <b key={idx}>{item.replace(/<\/?b>/g, '')}</b>;
      }
      return item;
    });
    return parsedWord;
  };
  return (
    <>
      {text.split(' ').map((word, index) => (
        <Box sx={{ marginRight: '5px', display: 'flex' }} key={index}>
          <MotionTypography
            variant='body1'
            sx={{ color: 'text.primary', fontWeight: '300', wordWrap: 'break-word' }}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: Math.random() }}
            key={index}
          >
            {renderWord(word)}
          </MotionTypography>
        </Box>
      ))}
    </>
  );
}
