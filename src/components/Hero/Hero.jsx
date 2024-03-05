import React from "react";
import "./Hero.css"

const Hero = () =>{
    return(
<section className="hero-container" id="home">
    <div className="hero-content">
        <h2>Empowering Innovation Through Technology</h2>
        <p>Software developer and systems architect with experience in designing, coding, and testing complex systems. highly proficient in Production and maintenance using Software Development technologies. Extensive knowledge of full Application development life cycle, MVC, Modular structure wiring, and workflow from scratch to production</p>
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