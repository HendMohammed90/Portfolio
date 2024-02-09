import React from 'react';
import "./App.css";
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/WorkExperience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <div className='content'>
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </div>
    <Footer />
    </div>

  )
}
export default App;
