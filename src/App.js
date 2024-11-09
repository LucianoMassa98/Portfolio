import React, { useRef } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

import Skills from './components/Skills';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Slide from './components/Slide'
import Carousel from './components/Carousel'
import QRCode from './components/QRCode'


function App() {
  const portfolioRef = useRef();

  return (
    <div className="App" ref={portfolioRef}>
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Carousel />
      <Slide />
      <Skills />
      <QRCode />
      <CTA/>
      <Footer />
    </div>
  );
}

export default App;
