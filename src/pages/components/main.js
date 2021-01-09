import React, { useContext, useEffect, useState } from 'react'
import "@fontsource/open-sans"
import '../../styles/main.scss'
import man from '../../images/man.png'
import wave from '../../images/wave.png'
import point from '../../images/point.png'
import { ThemeContext } from '../../themeContext'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ContactForm from './contactForm'
import Cancel from '../../assets/cancel.svg'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { theme } = useContext(ThemeContext)

    return (
        <main className={`main ${theme === 'dark' ? 'dark' : ''}`} >
            <p className='block block-1'>Hey there! <img src={wave} className='wave-img' alt='wave-emoji' /></p>
            <p className='block block-2'>I’m <span>Akilesh Rao</span>, a design-oriented software engineer based in Mumbai, IN. I build things for the web <img src={man} className='man-img' alt='working-emoji' /></p>
            <p className='block block-3'>Get in touch! <img src={point} className='point-img' alt='point-emoji' /><span className='email' onClick={() => setIsOpen(true)}>akileshrao19@gmail.com</span> </p>
            <SwipeableDrawer onOpen={() => null} open={isOpen} onClose={() => setIsOpen(false)} anchor='right' className={`contact-drawer ${theme === 'dark' ? "contact-drawer-dark" : ""}`}>
                <Cancel className='cancel' onClick={() => setIsOpen(false)} />
                <ContactForm />
            </SwipeableDrawer>
        </main>
    )
}

export default Main