import React, { useContext, useState, useEffect } from 'react'
import '../../styles/contactForm.scss'
import { ThemeContext } from '../../themeContext'
import emailjs from 'emailjs-com'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactForm = () => {
    const { theme } = useContext(ThemeContext)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [mailState, setMailState] = useState({ message: '', status: '' })
    const [snackOpen, setSnackOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendMail = () => {
        setLoading(true)
        if (validatorService()) {
            emailjs.send('akilesh_email', 'akilesh_email', { email, message }, 'user_KT9ZQwVnP23oKgxzEtWky')
                .then((response) => {
                    setEmail('')
                    setMessage('')
                    snackStateHelper("Thanks for the message! I'll get back to you ASAP.", "success")
                }, (err) => {
                    console.error(err)
                    snackStateHelper("Something went wrong. Try again after some time.", "error")
                });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'email') setEmail(value)
        if (name === 'message') setMessage(value)
    }

    const validatorService = () => {
        if (!email && !message) { return snackStateHelper("Email and message cannot be empty.", "warning") }
        if (!email) { return snackStateHelper("Email cannot be empty.", "warning") }
        if (!message) { return snackStateHelper("Message cannot be empty.", "warning") }
        return true
    }

    const snackStateHelper = (msg, status) => {
        setSnackOpen(true)
        setLoading(false)
        setMailState({ message: msg, status: status })
        return false
    }

    return (
        <div className={`contactForm ${theme === 'dark' ? "contactForm-dark" : ''}`}>
            <p className='title'>Say something nice!</p>
            <p className='subtitle'>My inbox is always open!</p>
            <div className='form-controls'>
                <input
                    type="text"
                    placeholder='Email'
                    className='email'
                    onChange={e => handleChange(e)}
                    name='email'
                    value={email}
                    disabled={loading === true ? true : false}
                />
                <textarea
                    type="text"
                    placeholder='Message'
                    className='message'
                    rows='3'
                    style={{ resize: 'none' }}
                    onChange={e => handleChange(e)}
                    name='message'
                    value={message}
                    disabled={loading === true ? true : false}
                ></textarea>
            </div>
            <button
                onClick={sendMail}
                className='submitButton'
                disabled={loading === true ? true : false}
            >
                Send message {loading ? <CircularProgress className='loader' /> : null}
                {/* {loading ? <CircularProgress style={{ height: "1.1rem", width: "1.1rem" }} /> : "Send message"} */}
            </button>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={snackOpen} autoHideDuration={5000} onClose={() => setSnackOpen(false)} className={`snackBar ${theme === 'dark' ? 'snackBar-dark' : ''}`}>
                <Alert onClose={() => setSnackOpen(false)} severity={mailState.status}>
                    {mailState.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ContactForm