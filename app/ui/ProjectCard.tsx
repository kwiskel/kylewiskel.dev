import { playfairDisplay } from '@/lib/theme';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type ProjectCardProps = {
  name: string;
  company?: string;
  date?: string;
  location?: string;
  description: string;
  image: StaticImageData;
  technologies?: string[];
  githubLink?: string;
  projectLink?: string;
  reverse?: boolean;
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
  'Android Studio': { src: '/icons/android-studio.svg', url: 'https://developer.android.com/studio' },
  Java: { src: '/icons/java.svg', url: 'https://www.java.com/' },
};

export default function ProjectCard({
  name,
  company,
  date,
  location,
  description,
  image,
  technologies,
  githubLink,
  projectLink = undefined,
  reverse = false,
}: ProjectCardProps) {
  const theme = useTheme();
  return (
    <Box // Project Card
      sx={{
        display: 'flex',
        margin: {
          xs: '0px 0px 100px 0px',
          lg: reverse ? '0px 0px 100px 0px' : '0px 0px 100px 25px',
        },
        height: 'fit-content',
        flexDirection: {
          xs: 'column',
          lg: reverse ? 'row-reverse' : 'row',
        },
      }}
    >
      <Box // Name + Project Description
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'start',
          maxWidth: {
            lg: '50%',
          },
          margin: {
            xs: '0px 10px 0px 10px',
            lg: reverse ? '0px 0px 0px 50px' : '0px 50px 0px 0px',
          },
        }}
      >
        <Typography // Project Name
          variant='h5'
          fontFamily={playfairDisplay.style.fontFamily}
          fontWeight='700'
          sx={{ color: 'text.primary', margin: '0px 0px 20px 0px', wordWrap: 'break-word' }}
        >
          {name}
        </Typography>
        {company && (
          <Typography //  Company
            variant='body1'
            sx={{ color: 'text.primary', margin: '-10px 0px 20px 0px', wordWrap: 'break-word' }}
          >
            {company}, {location} | {date}
          </Typography>
        )}
        <Typography // Project Description
          variant='body1'
          sx={{ color: 'text.secondary', wordWrap: 'break-word' }}
        >
          {description}
        </Typography>
        <Box // Technologies
          sx={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '85vw',
            margin: '15px 0px 0px 0px',
            alignSelf: { xs: 'center', lg: 'start' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              overflowX: 'scroll',
            }}
          >
            {technologies?.map((tech, index) => (
              <IconButton
                key={index}
                sx={{ padding: '15px', flexShrink: 0 }}
                href={techIcons[tech]?.url ?? null}
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
        </Box>
        <Box // Links
          display='flex'
          sx={{
            margin: { xs: '15px 10px 10px 0px', lg: '35px 0px 0px 0px' },
            justifyContent: {
              xs: 'center',
              lg: 'left',
            },
          }}
        >
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
      <Box // Project Image
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          width: {
            xs: '100%',
            lg: '50%',
          },
          margin: {
            xs: '25px 10px 0px 10px',
            lg: '0px 0px 0px 0px',
          },
          maxWidth: {
            xs: '90vw',
            sm: '60vw',
          },
        }}
      >
        <Image
          src={image}
          alt='Project Image'
          loading='lazy'
          sizes='(max-width: 900px) 50vw, (max-width: 1200px) 50vw, 50vw'
          style={{
            width: '100%',
            height: 'auto', // Automatically adjusts height to maintain aspect ratio
          }}
        />
      </Box>
    </Box>
  );
}
