import React from 'react'
import './src/styles/global.css'
import RootLayout from './src/pages/components/rootLayout'

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
