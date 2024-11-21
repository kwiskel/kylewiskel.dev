'use client';
import { Box, Collapse, Fade, useMediaQuery, useTheme } from '@mui/material';
import NavigationBar from './ui/NavigationBar';
import TitleSection from './ui/TitleSection';
import ProjectsSection from './ui/ProjectsSection';
import ContactSection from './ui/ContactSection';
import WorkSection from './ui/WorkSection';
import { useEffect, useRef, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

export default function Page() {
  const theme = useTheme();

  const projectRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const [showMore, setShowMore] = useState(false); // Controls expanded content
  const [fadeIn, setFadeIn] = useState(false);

  const setCollapse = () => {
    if (!showMore) {
      setShowMore(true);
    }
  };

  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  useEffect(() => {
    setShowMore(!isLargerThanMd);
  }, [isLargerThanMd]);

  return (
    <>
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
          <NavigationBar projectRef={projectRef} workRef={workRef} contactRef={contactRef} fadeIn={fadeIn} />
          <TitleSection fadeIn={fadeIn} setFadeIn={setFadeIn} />
          <Fade in={fadeIn} timeout={2000}>
            <ExpandMore
              sx={{
                display: { xs: 'none', md: 'block' },
                margin: 'auto',
                fontSize: '50px',
                color: theme.palette.text.primary,
                cursor: 'pointer',
                marginTop: '100px',
                rotate: showMore ? '180deg' : '0deg',
                visibility: showMore ? 'hidden' : 'visible',
              }}
              onClick={() => setCollapse()}
            />
          </Fade>
          <Collapse in={showMore} timeout={{ enter: 2000, exit: 0 }} sx={{ maxWidth: '100%' }}>
            <>
              <ProjectsSection ref={projectRef} />
              <WorkSection ref={workRef} />
              <ContactSection ref={contactRef} />
            </>
          </Collapse>
        </Box>
      </Box>
    </>
  );
}
