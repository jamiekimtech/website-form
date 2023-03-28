import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MouseIcon from '@mui/icons-material/Mouse';
import { Box, Button } from '@mui/material';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const Intro = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector('.arrow'),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.1
      }
    );
  }, []);

  return (
    <Box
      textAlign={'center'}
      pt={7}
      ref={ref}
      sx={{ position: 'relative', zIndex: 2 }}
    >
      <h1>Jamie Kim</h1>
      <h2>Software Developer</h2>
      <br />
      <Button
        href="https://docs.google.com/document/d/1ShoTcGOUJE_rQVk3BYw0mn4YEoimft6F5aL8UJ5Z3yA/edit?usp=sharing"
        variant="contained"
      >
        RESUME
      </Button>
      <br />
      <br />
      <p>
        Web Developer & Graphic Designer <br />
        Based in Detroit, Michigan.
      </p>
      <MouseIcon sx={{ mt: 1.1, fontSize: '2.5rem' }} />
      <br />
      <KeyboardDoubleArrowDownIcon
        sx={{ mt: -0.5, fontSize: '3rem' }}
        className="arrow"
      />
    </Box>
  );
};

export default Intro;
