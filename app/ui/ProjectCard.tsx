import { playfairDisplay } from '@/lib/theme';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  technologies?: string[];
  githubLink?: string;
  projectLink?: string;
};

const techIcons: Record<string, string> = {
  'Next.js': '/icons/next-js.svg',
  React: '/icons/react.svg',
  TypeScript: '/icons/typescript.svg',
  JavaScript: '/icons/javascript.svg',
  'Material UI': '/icons/materialui.svg',
  CSS: '/icons/css.svg',
  Django: '/icons/django.svg',
  Node: '/icons/nodejsLight.svg',
  WordPress: '/icons/wordpress.svg',
  PHP: '/icons/php.svg',
  Python: '/icons/python.svg',
};

export default function ProjectCard({
  name,
  description,
  image,
  technologies,
  githubLink,
  projectLink,
}: ProjectCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '0px 0px 0px 100px',
        height: 'fit-content',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'start',
          width: '50%',
          margin: '0px 50px 0px 0px',
        }}
      >
        <Typography
          variant='h5'
          fontFamily={playfairDisplay.style.fontFamily}
          fontWeight='700'
          sx={{ color: 'text.primary', margin: '0px 0px 20px 0px' }}
        >
          {name}
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary', margin: '0px 0px 35px 0px' }}>
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            margin: '0px 10px 0px 10px',
            justifyContent: 'center',
            width: '100%',
            gap: '20px',
          }}
        >
          {technologies?.map((tech, index) => (
            <IconButton key={index} sx={{ fontSize: '3em' }}>
              <Image src={techIcons[tech]} alt={tech} width={50} height={50} layout='intrinsic' />
            </IconButton>
          ))}
        </Box>
        <Box display='flex' sx={{ margin: '35px 0px 0px 0px' }}>
          {githubLink && (
            <Button
              variant='outlined'
              sx={{ margin: '0px 0px 0px 20px' }}
              href={githubLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              GitHub
            </Button>
          )}
          {projectLink && (
            <Button
              variant='outlined'
              sx={{ margin: '0px 0px 0px 20px' }}
              href={projectLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              View Project
            </Button>
          )}
        </Box>
      </Box>
      <Box>
        <Image src={image} alt='Profile Picture' width={1000} height={600} layout='intrinsic' />
      </Box>
    </Box>
  );
}
