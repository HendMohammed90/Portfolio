import React from 'react'

function NavListItem() {
    return (
        <>
            <img className='logo' src='/assets/images/logo.png' alt='logoImg' />

            <ul>
                <li><a className='menu-item' href="#home">Home</a></li>
                <li><a className='menu-item' href="#skills">Skills</a></li>
                <li><a className='menu-item' href="#workExperience">Work Experience</a></li>
                <li><a className='menu-item' href="#contact">Contact Me</a></li>
                <button className='contact-btn' onClick={() => { }}>
                    Hire Me
                </button>
            </ul>
        </>
    )
}

export default NavListItem
