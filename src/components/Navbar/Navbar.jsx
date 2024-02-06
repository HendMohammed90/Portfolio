import React, { useState } from 'react'
import "./Navbar.css"
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import MobileNav from './MobileNav/MobileNav';
import NavListItem from './NavListItem/NavListItem'



export const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
return (
<>

<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
<nav className='nav-wrapper'>
    <div className="nav-content">
        <NavListItem />
        <button className='menu-btn' onClick={toggleMenu}>
        {openMenu ? <IoCloseCircle /> : <CiMenuBurger />}
        </button>
    </div>
</nav>
</>  )
}
