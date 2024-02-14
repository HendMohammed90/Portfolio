/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NavListItem() {
  
  const handleItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <img className='logo' src='/assets/images/logo.png' alt='logoImg' />

      <ul>
      <li><button className='menu-item' onClick={() => handleItemClick('home')}>Home</button></li>
        <li><button className='menu-item' onClick={() => handleItemClick('skills')}>Skills</button></li>
        <li><button className='menu-item' onClick={() => handleItemClick('experience')}>Experience</button></li>
        <li><button className='menu-item' onClick={() => handleItemClick('samples')}>Samples</button></li>
        <li><button className='menu-item' onClick={() => handleItemClick('contact')}>Contact Me</button></li>
        <li><button className='contact-btn' onClick={() => {handleItemClick('contact') }}>
          Hire Me
        </button></li>
      </ul>
    </>
  );
}

export default NavListItem;
