import React, { useContext } from 'react'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import Dribbble from '../../assets/dribbble.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Medium from '../../assets/medium.svg'
import Github from '../../assets/github.svg'
import '../../styles/socials.scss'
import { ThemeContext } from '../../themeContext'

const Socials = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`socials ${theme === 'dark' ? "dark" : ''}`}>
            <a href="https://twitter.com/absenceofhumour" target='blank'><Twitter className='icon' /></a>
            <a href="https://www.instagram.com/disco_pilots/" target='blank'><Instagram className='icon' /></a>
            <a href="https://dribbble.com/AkileshAro" target='blank'><Dribbble className='icon' /></a>
            <a href="https://www.linkedin.com/in/akilesh-rao-610357137/" target='blank'><LinkedIn className='icon' /></a>
            <a href="https://medium.com/@akileshrao19" target='blank'><Medium className='icon' /></a>
            <a href="https://github.com/AkileshAro" target='blank'><Github className='icon' /></a>
            <div className='line'></div>
        </div>
    )
}

export default Socials