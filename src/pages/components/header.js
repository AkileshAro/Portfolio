import React from 'react'
import '../../styles/header.scss'

const Header = () => {

    return (
        <div className='header'>
            <div className="icon">
                AR
            </div>
            <div className="toggle">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default Header;