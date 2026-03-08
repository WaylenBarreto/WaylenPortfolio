import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Inspirations from './components/Inspirations';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="geo-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Inspirations />
      <Achievements />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
