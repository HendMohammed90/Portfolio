import React from 'react'
import "./Navbar.css"
import { CiMenuBurger } from "react-icons/ci";



export const Navbar = () => {
return (
<>
<nav className='nav-wrapper'>
    <div className="nav-content">
        <img className='logo' src='/assets/images/logo.png' alt='logoImg' />

        <ul>
            <li><a className='menu-item' href="#home">Home</a></li>
            <li><a className='menu-item' href="#skills">Skills</a></li>
            <li><a className='menu-item' href="#workExperience">Work Experience</a></li>
            <li><a className='menu-item' href="#contact">Contact Me</a></li>
            <button className='contact-btn' onClick={()=>{}}>
                Hire Me
            </button>
        </ul>
        <button className='menu-btn' onClick={()=>{}}>
        <CiMenuBurger />
        </button>
    </div>
</nav>
</>  )
}
