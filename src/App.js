import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Slide from './components/Slide'
import DownloadPDF from './components/DownloadPDF'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      <Slide />
      <Skills />
      <CTA />
      <DownloadPDF />
      <Footer />
    </div>
  );
}

export default App;
