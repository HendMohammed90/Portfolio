import React from 'react';
import "./App.css";
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <div className='content'>
      <Hero />
      <Skills />
    </div>
    </div>

  )
}
export default App;
