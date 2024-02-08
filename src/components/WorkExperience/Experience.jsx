import React from 'react'
import "./Experience.css"
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";


const Experience = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint : 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
  <section className="experience-container">
    <h5>Experience</h5>
    <div className='experience-content'>
        <Slider {...settings}>
        {WORK_EXPERIENCE.map((item)=>{
            return <ExperienceCard key={item.title} details={item} />
        })}
        </Slider>
    </div>
  </section>
  )
}

export default Experience
