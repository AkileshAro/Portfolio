import React, { useState } from 'react'

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const changeTheme = (theme) => {
        setTheme(theme);
        if (theme === 'dark') {
            document.body.style.background = '#15192a'
        } else {
            document.body.style.background = '#fff'
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }