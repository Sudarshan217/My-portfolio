import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
function Footer() {
  return (
    <>
      <footer>
        <a href='#' className='footer__logo'>SUDARSHAN</a>
        <u className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#contact'>Contact</a></li>
        </u>

        <div className="footer__socials">
          <a href="https://instagram.com"><FiInstagram/></a>
        </div>
      </footer>
    </>
  )
}

export default Footer
