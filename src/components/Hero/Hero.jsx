import React from "react";
import "./Hero.css"

const Hero = () =>{
    return(
<section className="hero-container">
    <div className="hero-content">
        <h2>Building Digital Experience That Inspire</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in neque? Quod natus minima ratione nesciunt quibusdam eveniet iste dolores voluptate quasi consequatur repellat, omnis error dolorum similique quidem asperiores?</p>
    </div>
    <div className="hero-img">
        <div>
        <div className="tech-icon">
            <img src='/assets/images/react.svg' alt="reactIcon"/>
        </div>
        <img className="hero-logo" src='/assets/images/me.png' alt="HendMohammedLogo"/>
        </div>
        <div>
        <div className="tech-icon">
            <img src='/assets/images/html.svg' alt="htmlIcon"/>
        </div>
        <div className="tech-icon">
            <img src='/assets/images/css.svg' alt="cssIcon"/>
        </div>
        <div className="tech-icon">
            <img src='/assets/images/js.svg' alt="jsIcon"/>
        </div>
        </div>
    </div>


</section>    )
}

export default Hero;