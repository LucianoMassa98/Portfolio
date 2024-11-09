import React from 'react';
import './Hero.css'; // Archivo CSS asociado

const Hero = () => {
  return (
    <section className="hero-container">
        <h3>Video Presentación</h3>

      <iframe
        title="Instagram Reel"  // El atributo "title" es obligatorio para accesibilidad
        className="hero-iframe"
        src="https://www.instagram.com/reel/C_6sMuCpjjg/embed/captioned/"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        alt="Video en instagram"
      />
    </section>
  );
};

export default Hero;
