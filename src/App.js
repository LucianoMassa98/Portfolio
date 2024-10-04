import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Carousel />
      <Skills />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
