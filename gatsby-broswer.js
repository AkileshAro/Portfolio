import React from 'react'
import './src/styles/global.css'
import RootLayout from './src/pages/components/rootLayout'

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
        window.location.reload()
    }
}