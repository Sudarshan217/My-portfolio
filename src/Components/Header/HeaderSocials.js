import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/sudarshan-saini-aa82b4235" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/Sudarshan217" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials
