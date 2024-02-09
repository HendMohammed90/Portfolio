import React from 'react'
import "./ContactInfoCard.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ContactInfoCard = ({text ,type}) => {
 const iconType = ["MdOutlineEmail","FaGithub"];
  return (
    <div className='contact-details-card'>
        <div className='icon'>
        {type === iconType[0] && (<MdOutlineEmail size={40}/>)}
        {type === iconType[1] && (<FaGithub size={40}/>)}
        </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
