import React from 'react'

import { ThemeProvider } from '../../themeContext'

export default function RootLayout({ children }) {
    return (
        <>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </>
    );
}