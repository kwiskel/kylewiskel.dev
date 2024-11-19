'use client';
import { Box, useTheme } from '@mui/material';
import NavigationBar from './ui/NavigationBar';
import TitleSection from './ui/TitleSection';
import ProjectsSection from './ui/ProjectsSection';
import ContactSection from './ui/ContactSection';
import WorkSection from './ui/WorkSection';
import { useRef } from 'react';

export default function Page() {
  const theme = useTheme();

  const projectRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        backgroundImage: (theme) =>
          theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, #ffffff26 1px, transparent 1px)'
            : 'radial-gradient(circle, #12121226 1px, transparent 1px)',
        backgroundSize: '40px 40px' /* Adjust for dot spacing */,
        height: 'fit-content',
      }}
    >
      <NavigationBar projectRef={projectRef} workRef={workRef} contactRef={contactRef} />
      <TitleSection />
      <ProjectsSection ref={projectRef} />
      <WorkSection ref={workRef} />
      <ContactSection ref={contactRef} />
    </Box>
  );
}
