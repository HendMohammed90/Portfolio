import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form>
        <div className='name-container'>
            <input type='text' placeholder='Name' name='name' required/>
        </div>
        <input type='email' placeholder='Email Address' name='email'/>
        <textarea type='text' rows={4} cols={50} placeholder='Message' name='message' />   
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
