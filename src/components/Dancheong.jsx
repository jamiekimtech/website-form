import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import Behind1 from '../images/dc-behind-1.svg';
import Behind2 from '../images/dc-behind-2.svg';

const Dancheong = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('#first'),
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 1.2,
        duration: 1,

        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: 'top top',
          end: 40,
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('#second'),
      { opacity: 1 },
      {
        scale: 1.8,
        opacity: 0.5,

        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: 'top top',
          end: 50,
          scrub: true
        }
      }
    );
  }, []);

  return (
    <Box sx={{ position: 'relative' }} ref={ref} className="trigger">
      <img
        id="first"
        style={{
          height: 280,
          width: 280,
          position: 'absolute',
          top: -310,
          left: -140,
          zIndex: 1,
          filter:
            'brightness(0) saturate(100%) invert(4%) sepia(4%) saturate(5487%) hue-rotate(164deg) brightness(100%) contrast(92%)'
        }}
        src={Behind1}
        alt=""
      />

      <img
        id="second"
        style={{
          height: 280,
          width: 280,
          position: 'absolute',
          top: -300,
          left: -140,
          zIndex: 0,
          filter:
            'brightness(0) saturate(100%) invert(5%) sepia(4%) saturate(189%) hue-rotate(314deg) brightness(99%) contrast(92%)'
        }}
        src={Behind2}
        alt=""
      />
    </Box>
  );
};

export default Dancheong;
