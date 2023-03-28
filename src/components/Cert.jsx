import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const certificates = [
  {
    id: 1,
    source: 'Coursera ',
    title: 'Meta React Basics',
    image: 'https://i.imgur.com/jtaFw7o.jpeg'
  },
  {
    id: 2,
    source: 'freeCodeCamp',
    title: 'JS Algorithms & Data Structures',
    image: 'https://i.imgur.com/7zu5KP8.jpg'
  },
  {
    id: 3,
    source: 'freeCodeCamp',
    title: 'Responsive Web Design',
    image: 'https://i.imgur.com/Zjq7TVk.jpg'
  }
];

const Cert = () => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        {certificates.map((cert) => (
          <Grid item key={cert.id} xs={12} lg={6}>
            <Card
              sx={{
                maxWidth: { xs: 600, md: 520 },
                borderRadius: 5,

                margin: 2,
                bgcolor: 'black',
                color: 'white',
                position: 'relative',
                minHeight: 250
              }}
            >
              <Typography
                sx={{ lineHeight: 1.1, mt: 0.8 }}
                fontSize={25}
                variant="h6"
              >
                {cert.title}
              </Typography>
              <Typography variant="h7">{cert.source}</Typography>

              <CardMedia
                sx={{ height: 150, width: '94%', borderRadius: 2, mt: 1 }}
                image={cert.image}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cert;
