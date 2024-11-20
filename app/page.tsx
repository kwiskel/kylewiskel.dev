'use client';
import { Box, Collapse, useTheme } from '@mui/material';
import NavigationBar from './ui/NavigationBar';
import TitleSection from './ui/TitleSection';
import ProjectsSection from './ui/ProjectsSection';
import ContactSection from './ui/ContactSection';
import WorkSection from './ui/WorkSection';
import { useRef, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

export default function Page() {
  const theme = useTheme();

  const projectRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // const [showMore, setShowMore] = useState(false); // Controls expanded content

  // const setCollapse = () => {
  //   if (showMore) window.scrollTo({ top: 0, behavior: 'smooth' });
  //   setShowMore(!showMore);
  // };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          maxWidth: '1300px',
          margin: {
            xs: '25px 15px 50px 15px',
            lg: '25px 100px 50px 100px',
          },
        }}
      >
        <NavigationBar projectRef={projectRef} workRef={workRef} contactRef={contactRef} />
        <TitleSection />
        {/* <ExpandMore
          sx={{
            display: 'block',
            margin: 'auto',
            fontSize: '50px',
            color: theme.palette.text.primary,
            cursor: 'pointer',
            marginTop: '100px',
            rotate: showMore ? '180deg' : '0deg',
          }}
          onClick={() => setCollapse()}
        /> */}
        <Collapse in={true} timeout={{ enter: 2000, exit: 0 }} sx={{ maxWidth: '100%' }}>
          <>
            <ProjectsSection ref={projectRef} />
            <WorkSection ref={workRef} />
            <ContactSection ref={contactRef} />
          </>
        </Collapse>
      </Box>
    </Box>
  );
}
