import React from 'react'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import Dribbble from '../../assets/dribbble.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Medium from '../../assets/medium.svg'
import Github from '../../assets/github.svg'
import '../../styles/socials.scss'

const Socials = () => {
    return (
        <div className='socials'>
            <Twitter className='icon' />
            <Instagram className='icon' />
            <Dribbble className='icon' />
            <LinkedIn className='icon' />
            <Medium className='icon' />
            <Github className='icon' />
            <div className='line'></div>
        </div>
    )
}

export default Socials