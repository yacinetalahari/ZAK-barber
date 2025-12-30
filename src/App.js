import React from 'react';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Services from './components/services.js';
import Gallery from './components/gallery.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;