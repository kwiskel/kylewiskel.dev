import { Box, Typography, useTheme } from '@mui/material';
import { playfairDisplay } from '@/lib/theme';
import ProjectCard from './ProjectCard';
import portfolioMockupDarkMode from '../../public/projects/portfolio-mockup-darkmode.png';
import portfolioMockupLightMode from '../../public/projects/portfolio-mockup-lightmode.png';

export default function ProjectsSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'middle',
        margin: '20vh 50px 200px 50px',
      }}
    >
      <Typography
        variant='h3'
        fontFamily={playfairDisplay.style.fontFamily}
        fontWeight='700'
        sx={{ color: 'text.primary', margin: '0px 0px 100px 0px', alignSelf: 'left' }}
      >
        Projects
      </Typography>
      <ProjectCard
        name='Portfolio Website'
        description='Personal Porfolio Website built using Next.js, React, Typescript, 
        Material UI, and CSS. This consists of my resume, a summary about me, my projects, my work experience, and my contact info.'
        image={theme.palette.mode === 'dark' ? portfolioMockupDarkMode : portfolioMockupLightMode}
        technologies={['Next.js', 'React', 'TypeScript', 'Material UI', 'CSS']}
        githubLink='https://github.com/kwiskel/kylewiskel.dev'
        projectLink='https://kylewiskel.dev'
      />
    </Box>
  );
}
