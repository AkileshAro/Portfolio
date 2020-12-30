import React from 'react'
import "@fontsource/open-sans"
import '../../styles/main.scss'
import man from '../../images/man.png'
import wave from '../../images/wave.png'
import point from '../../images/point.png'

const Main = () => {

    return (
        <div className='main'>
            <p className='block-1'>Hey there! <img src={wave} className='wave-img' /></p>
            <p className='block-2'>I’m <span>Akilesh Rao</span>, a design-oriented software engineer based in Mumbai, IN. I build things for the web <img src={man} className='man-img' /></p>
            <p className='block-3'>Get in touch! <img src={point} className='point-img' /><span className='email'>akileshrao19@gmail.com</span> </p>
        </div>
    )
}

export default Main