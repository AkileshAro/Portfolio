import * as React from "react"
import '../styles/global.css'
import Header from './components/header'
import Main from './components/main'
import Socials from './components/socials'
import RootLayout from './components/rootLayout'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <RootLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name='description' content="Akilesh Rao is a design-oriented software engineer based in Mumbai, IN." />
        <title>Akilesh Rao</title>
        <html lang="en" />
      </Helmet>
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
