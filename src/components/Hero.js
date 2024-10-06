import React from 'react';
import './Hero.css'; // Archivo CSS asociado

const Hero = () => {
  return (
    <section className="hero-container">
      <iframe
        className="hero-iframe"
        src="https://www.instagram.com/reel/C_6sMuCpjjg/embed/captioned/"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Hero;
