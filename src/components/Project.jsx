import LaunchIcon from '@mui/icons-material/Launch';
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';

const projects = [
  {
    id: 1,

    title: 'Portfolio Website',
    image: 'https://i.imgur.com/WclFXl4.jpg',
    description: 'Website to showcase projects and certificates.',
    tools: 'Tools: React, MUI, ScrollTrigger',
    code: 'https://github.com/jamiekimtech/Website',
    demo: 'https://jamie-kim-portfolio.vercel.app/'
  },
  {
    id: 2,

    title: 'Currency Ticker',
    image: 'https://i.imgur.com/Zw3JBB4.jpeg',
    description: `Currency ticker(KRW/USD) using an API with a toggle button for dark/light modes.`,
    tools: 'Tools: JS(ES6 Modules), HTML, CSS',
    code: 'https://github.com/jamiekimtech/Currency-Ticker-with-Dark-Light-Mode',
    demo: 'https://main--singular-salmiakki-a6c94d.netlify.app/'
  },
  {
    id: 3,

    title: 'Volunteer/freeCodeCamp Translator',
    image:
      'https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_scale.size_760x427.v1627670281.png',
    description: `Translate educational materials about programming from English to
    Korean for a nonprofit organization`
  }
];

const Project = () => {
  return (
    <>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        sx={{ maxWidth: 900 }}
        fontFamily="Bakersville"
      >
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} md={6}>
            <Card
              sx={{
                maxWidth: { xs: 600, md: 520 },
                borderRadius: 5,
                minHeight: { xs: 320, md: 330 },
                margin: 2,
                bgcolor: '#d1d1d1',
                position: 'relative'
              }}
            >
              <Typography
                sx={{ lineHeight: 1.2, mt: 0.8 }}
                fontSize={25}
                variant="h6"
              >
                {project.title}
              </Typography>
              <CardMedia sx={{ height: 150 }} image={project.image} />
              <Typography sx={{ width: '90%', lineHeight: 1.4 }}>
                {project.description}
              </Typography>
              <Typography>
                <b>{project.tools}</b>
              </Typography>
              {project.code && project.demo && (
                <CardActions sx={{ position: 'absolute', bottom: 5, right: 3 }}>
                  <Button
                    sx={{ bgcolor: 'black' }}
                    variant="contained"
                    href={project.code}
                    size="small"
                  >
                    Code
                  </Button>
                  <Button
                    sx={{ bgcolor: 'black' }}
                    variant="contained"
                    href={project.demo}
                    size="small"
                  >
                    Demo <LaunchIcon fontSize="xs" />
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Project;
