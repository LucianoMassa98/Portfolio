import React, { useRef } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Profile from './components/Profile';
import Skills from './components/Skills';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Slide from './components/Slide';
import Carousel from './components/Carousel';
import QRCode from './components/QRCode';

function App() {
  const portfolioRef = useRef();

  return (
    <div className="App" ref={portfolioRef}>
      <Header />
     
        <Profile />
     
        <Hero />
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="carousel">
        <Carousel />
      </section>
        <Slide />
      <section id="skills">
        <Skills />
      </section>
      <section id="qrcode">
        <QRCode />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  );
}

export default App;
