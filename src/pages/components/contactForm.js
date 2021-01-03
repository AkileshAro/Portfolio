import React, { useContext } from 'react'
import '../../styles/contactForm.scss'
import { ThemeContext } from '../../themeContext'
import Cancel from '../../assets/cancel.svg'

const ContactForm = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`contactForm ${theme === 'dark' ? "contactForm-dark" : ''}`}>
            <Cancel className='cancel' />
            <p className='title'>Say something nice!</p>
            <p className='subtitle'>My inbox is always open!</p>
            <div className='form-controls'>
                <input type="text" placeholder='Email' className='email' />
                <textarea type="text" placeholder='Message' className='message' rows='3' style={{ resize: 'none' }}></textarea>
            </div>
            <button>
                Send message
            </button>
        </div>
    )
}

export default ContactForm