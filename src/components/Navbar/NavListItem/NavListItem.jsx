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
        <li><a className='menu-item' onClick={() => handleItemClick('home')}>Home</a></li>
        <li><a className='menu-item' onClick={() => handleItemClick('skills')}>Skills</a></li>
        <li><a className='menu-item' onClick={() => handleItemClick('experience')}>Experience</a></li>
        <li><a className='menu-item' onClick={() => handleItemClick('samples')}>Samples</a></li>
        <li><a className='menu-item' onClick={() => handleItemClick('contact')}>Contact Me</a></li>
        <button className='contact-btn' onClick={() => { }}>
          Hire Me
        </button>
      </ul>
    </>
  );
}

export default NavListItem;
