import React, { useContext, useEffect } from 'react'
import '../../styles/header.scss'
import { ThemeContext } from '../../themeContext'

const Header = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    const setTheme = e => {
        if (e.target.checked) {
            changeTheme('dark')
        } else {
            changeTheme('light')
        }
    }

    return (
        <header className={`header ${theme === 'dark' ? "dark" : ''}`}>
            <div className="header-icon">
                AR
            </div>
            <div className="toggle">
                <label className="switch">
                    <input type="checkbox" onChange={e => setTheme(e)} />
                    <span className="slider"></span>
                </label>
            </div>
        </header>
    )
}

export default Header;