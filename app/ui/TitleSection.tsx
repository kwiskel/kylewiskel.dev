import { playfairDisplay } from '@/lib/theme';
import { Box, Typography } from '@mui/material';

export default function TitleSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant='h1'
        fontFamily={playfairDisplay.style.fontFamily}
        fontWeight='700'
        sx={{ color: 'text.primary' }}
      >
        Kyle Wiskel
      </Typography>
    </Box>
  );
}
