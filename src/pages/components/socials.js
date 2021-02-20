import React, { useContext } from 'react'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import Dribbble from '../../assets/dribbble.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Medium from '../../assets/medium.svg'
import Github from '../../assets/github.svg'
import '../../styles/socials.scss'
import { ThemeContext } from '../../themeContext'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Socials = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`socials ${theme === 'dark' ? "dark" : ''}`}>
            <OutboundLink href="https://twitter.com/absenceofhumour" target='blank'><Twitter className='icon' /></OutboundLink>
            <OutboundLink href="https://www.instagram.com/disco_pilots/" target='blank'><Instagram className='icon' /></OutboundLink>
            <OutboundLink href="https://dribbble.com/AkileshAro" target='blank'><Dribbble className='icon' /></OutboundLink>
            <OutboundLink href="https://www.linkedin.com/in/akilesh-rao-610357137/" target='blank'><LinkedIn className='icon' /></OutboundLink>
            <OutboundLink href="https://medium.com/@akileshrao19" target='blank'><Medium className='icon' /></OutboundLink>
            <OutboundLink href="https://github.com/AkileshRao" target='blank'><Github className='icon' /></OutboundLink>
            <div className='line'></div>
        </div>
    )
}

export default Socials