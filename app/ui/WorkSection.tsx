import { Box, Typography, useTheme } from '@mui/material';
import { playfairDisplay } from '@/lib/theme';
import ProjectCard from './ProjectCard';
import racMockup from '../../public/work/rac-mockup.png';
import { RefObject } from 'react';

type props = {
  ref: RefObject<HTMLDivElement>;
};

export default function WorkSection({ ref }: props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'middle',
        margin: '0px 50px 200px 50px',
      }}
    >
      <Typography
        ref={ref}
        variant='h3'
        fontFamily={playfairDisplay.style.fontFamily}
        fontWeight='700'
        sx={{ color: 'text.primary', margin: '0px 0px 100px 0px', alignSelf: 'left' }}
      >
        Work Experience
      </Typography>
      <ProjectCard
        name='Full Stack Developer'
        company='Royal Alberta College (Intern)'
        date='June 2024 - August 2024'
        location='Edmonton, AB'
        description='*Developed JavaScript-based automations to create acceptance documents and send them to applicants, allowing Senior Staff to process applications more efficiently. 
        *Conducted testing and bug fixing of multiple WordPress websites, focusing on visual, functionality, and responsiveness issues.'
        image={racMockup}
        technologies={['JavaScript', 'WordPress', 'PHP']}
        githubLink=''
        projectLink='https://alberta.college/'
      />
    </Box>
  );
}
