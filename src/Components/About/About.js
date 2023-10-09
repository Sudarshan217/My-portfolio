import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { AiFillFolderOpen } from 'react-icons/ai'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Sudarshan' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__cards1'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__cards1'>
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>Front End Developer. Ability to translate business requirement into technical solutions. Self-motivated,providing decisive team leadership and motivating team fellows.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
