import React from 'react'
import "./ContactInfoCard.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ContactInfoCard = ({text ,type}) => {
 const iconType = ["MdOutlineEmail","FaGithub"];
  return (
    <div className='contact-details-card'>
        <div className='icon'>
        {type === iconType[0] && (<a href="mailto:email@email.de"><MdOutlineEmail size={40}  /></a>)}
        {type === iconType[1] && (<a href='https://github.com/HendMohammed90' target='blank'><FaGithub size={40}/></a>)}
        </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
