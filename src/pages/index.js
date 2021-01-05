import * as React from "react"
import '../styles/global.css'
import Header from './components/header'
import Main from './components/main'
import Socials from './components/socials'
import RootLayout from './components/rootLayout'

const IndexPage = () => {
  return (
    <RootLayout>
      <div className='container'>
        <Header />
        <div className='center'>
          <Main />
          <Socials />
        </div>
      </div>
    </RootLayout>
  )
}

export default IndexPage
