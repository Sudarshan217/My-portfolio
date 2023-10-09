import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
export default function app() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}
