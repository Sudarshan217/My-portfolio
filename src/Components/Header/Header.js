import './Header.css'
import React from 'react'
import './Header.js'
import CTA from './CTA.js'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.js'
function Header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Sudarshan Saini</h1>
          <h5 className='text-light'>Front-End Developer</h5>
          <CTA />
          <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt='me'/>
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default Header
