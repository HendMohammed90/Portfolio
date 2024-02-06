import React from "react";
import "./MobileNav.css"
import NavListItem from "../NavListItem/NavListItem";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={{ toggleMenu }}>
                <div className="mobile-menu-container">
                    <NavListItem />
                </div>
            </div>
        </>)
}

export default MobileNav;