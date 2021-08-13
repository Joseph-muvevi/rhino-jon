import React from 'react'
import "./contact.css"
import ContactBanner from './contactBanner/contactBanner'
import ContactForm from './contactform/contactForm'

const Contact = () => {
    return (
        <div className="contact">
            <ContactBanner/>
            <ContactForm/>
        </div>
    )
}

export default Contact
