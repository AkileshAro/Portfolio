import * as React from "react"
import '../styles/global.css'
import Header from './components/header'
import Main from './components/main'
import Socials from './components/socials'

const IndexPage = () => {
  return (
    <div className='container'>
      <Header />
      <div className='center'>
        <Main />
        <Socials />
      </div>
    </div>
  )
}

export default IndexPage
