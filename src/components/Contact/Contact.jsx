import React from 'react'
import "./Contact.css";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';


const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <h5>Contact Me</h5>
      <div  className="contact-content">
        <div style={{flex: 1}}>
            <ContactInfoCard 
            type="MdOutlineEmail"
            text="Hend.odesk.tasks@gmail.com"
            />
            <ContactInfoCard 
            type="FaGithub"
            text="https://github.com/HendMohammed90"
            />
        </div>
        <div style={{flex: 1}}>
            <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact
