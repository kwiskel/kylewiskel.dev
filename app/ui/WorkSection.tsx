import { Box, Typography } from '@mui/material';
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
        margin: {
          xs: '100px 0px 0px 0px',
          md: '100px 50px 0px 50px',
        },
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
        company='Closure Liability Management'
        date='December 2024 - Present'
        location='Calgary, AB'
        description={[
          'Led a full frontend and backend rebuild of Praedico, our newly released Asset Retirement Obligation platform, modernizing the architecture with Angular, TypeScript, Tailwind CSS, Python, and PostgreSQL.',
          'Built a comprehensive license management system, limiting pages and features based on user subscriptions using Angular router guards & resolvers and customizable user licenses in the PostgreSQL database.',
          'Developed a high-performance well search feature using Python, capable of querying millions of well database records with sub-second response times using efficient SQL queries and optimizing db indexes.',
          'Designed a full-featured document repository supporting folder hierarchies, drag-and-drop file management, S3 integration, and document viewing.',
          'Integrated PostHog analytics platform-wide, implementing custom event capture, exception tracking, and user and organization identification to deliver insights to our executive team.',
        ]}
        // image={racMockup}
        // technologies={['Angular', 'Typescript', 'Python', 'Tailwind CSS', 'PostgreSQL']}
        technologies={['Angular', 'TypeScript', 'Python', 'CSS']}
        githubLink=''
        projectLink='https://www.praedico.ca/'
      />
      <ProjectCard
        name='Full Stack Developer'
        company='Royal Alberta College'
        date='June 2024 - August 2024'
        location='Edmonton, AB'
        description={[
          'Developed JavaScript-based automations to create acceptance documents and send them to applicants, allowing Senior Staff to process applications more efficiently.',
          'Conducted testing and bug fixing of multiple WordPress websites, focusing on visual, functionality, and responsiveness issues.',
        ]}
        image={racMockup}
        technologies={['JavaScript', 'WordPress', 'PHP']}
        githubLink=''
        projectLink='https://alberta.college/'
        reverse={true}
      />
      <ProjectCard
        name='Full Stack Developer'
        company='MecSimCalc'
        date='May 2023 - April 2024'
        location='Edmonton, AB'
        description={[
          'Developed application sharing feature using Django and SQL to create REST API endpoints that allow developers to control the privacy of their apps and limit access to whitelisted users.',
          'Designed and implemented frontend application that allows users to create their own scripts to help with engineering tasks using React, TypeScript, and CSS following Material UI design guidelines.',
          'Created and updated email templates using MJML and automated their delivery using Django.',
          'Worked in a startup environment and helped design various monetization strategies.',
        ]}
        // image={racMockup}
        technologies={['React', 'TypeScript', 'Material UI', 'CSS', 'Django', 'Python']}
        githubLink=''
        projectLink='https://mecsimcalc.com/'
      />
      <ProjectCard
        name='Full Stack Developer'
        company='DishZero'
        date='May 2023 - August 2024'
        location='Edmonton, AB'
        description={[
          'Led development efforts as the sole developer using TypeScript and React to implement new features for the dish borrowing web application in collaboration with non-technical team members.',
          'Configured and deployed an AWS EC2 instance to host the backend, integrated with an Nginx web server and used pm2 to keep the application alive.',
          'Used Material UI to refactor frontend code originally written in HTML and CSS, enhancing code re-usability and ensuring consistency throughout the codebase.',
          'Developed REST API endpoints using Node.js for creating, fetching, and deleting dishes over HTTPS.',
        ]}
        // image={racMockup}
        technologies={['React', 'TypeScript', 'Material UI', 'CSS', 'Node.js', 'Amazon EC2']}
        githubLink='https://github.com/dishzero/DishZero'
        projectLink='https://app.dishzero.ca/'
        reverse={true}
      />
    </Box>
  );
}
