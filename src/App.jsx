import React from 'react';
import "./App.css";
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <div className='content'>
      <Hero />
    </div>
    </div>

  )
}
export default App;
