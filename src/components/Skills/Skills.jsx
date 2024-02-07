import React, { useState } from "react";
import { SKILLS } from "../../utils/data";
import "./Skills.css"
import SkillsCard from "./SkillsCard/SkillsCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = ()=>{
    const[selectedSkill , setSelectedSkill] = useState(SKILLS[0])

    const handelSelectedSkill = (data) => {
        setSelectedSkill(data)
    }
return(
    <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item)=>{
                    return <SkillsCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title === item.title} onClick={()=>{handelSelectedSkill(item)}} />
                })}
            </div>
            <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
)

}

export default Skills;