import React from 'react';
import Introduction from '../Introduction';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Hi, I am Antonio Villarreal</h1>
      <Introduction/>
    </div>
  );
}

export default HeroSection;