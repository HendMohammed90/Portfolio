import React, { useRef } from 'react'
import "./ContactForm.css"
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7koyjds', 'template_vsd8cs7', form.current, {
        publicKey: 'Ng2akoaLSRf9Q7wHE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='contact-form-content'>
      <form  ref={form} onSubmit={sendEmail}>
        <div className='name-container'>
            <input type='text' placeholder='Name' name="from_name" required/>
        </div>
        <input type='email' placeholder='Email Address' name="form_email"/>
        <textarea type='text' rows={4} cols={50} placeholder='Message' name="message" />   
        <button type='submit' value="Send">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
