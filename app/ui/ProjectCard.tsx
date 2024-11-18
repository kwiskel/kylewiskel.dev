import { playfairDisplay } from '@/lib/theme';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  technologies?: string[];
  githubLink?: string;
  projectLink?: string;
};

const techIcons: Record<string, Record<string, string>> = {
  'Next.js': { dark: '/icons/next-js-darkmode.svg', light: '/icons/next-js-lightmode.svg', url: 'https://nextjs.org/' },
  React: { src: '/icons/react.svg', url: 'https://react.dev/' },
  TypeScript: { src: '/icons/typescript.svg', url: 'https://www.typescriptlang.org/' },
  JavaScript: { src: '/icons/javascript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  'Material UI': { src: '/icons/materialui.svg', url: 'https://mui.com/material-ui/' },
  CSS: {
    dark: '/icons/css-darkmode.svg',
    light: '/icons/css-lightmode.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  Django: { src: '/icons/django.svg', url: 'https://www.djangoproject.com/' },
  'Node.js': {
    dark: '/icons/node-js-darkmode.svg',
    light: '/icons/node-js-lightmode.svg',
    url: 'https://nodejs.org/en',
  },
  WordPress: { src: '/icons/wordpress.svg', url: 'https://wordpress.org/' },
  PHP: { src: '/icons/php.svg', url: 'https://www.php.net/' },
  Python: { dark: '/icons/python-darkmode.svg', light: '/icons/python-lightmode.svg', url: 'https://www.python.org/' },
  'Amazon EC2': {
    dark: '/icons/amazon-ec2-darkmode.svg',
    light: '/icons/amazon-ec2-lightmode.svg',
    url: 'https://aws.amazon.com/pm/ec2/',
  },
  Firebase: {
    dark: '/icons/firebase-darkmode.svg',
    light: '/icons/firebase-lightmode.svg',
    url: 'https://firebase.google.com/',
  },
};

export default function ProjectCard({
  name,
  description,
  image,
  technologies,
  githubLink,
  projectLink,
}: ProjectCardProps) {
  const theme = useTheme();
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
            <IconButton
              key={index}
              sx={{ padding: '15px' }}
              href={techIcons[tech].url ?? null}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                src={techIcons[tech][theme.palette.mode] ?? techIcons[tech]['src']}
                alt={tech}
                width={50}
                height={50}
              />
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
        <Image src={image} alt='Project Image' width={1000} height={600} />
      </Box>
    </Box>
  );
}
