import React from 'react'
import './Portfolio.css'
import image from '../../assets/image.gif'
import image1 from '../../assets/portfolio2.jpg'
const Portfolio = () => {

    const data = [
        {
            id: 1,
            image: image,
            title: 'iNoteBooks Project',
            github: 'https://github.com/Sudarshan217/iNoteBook',
            demo: 'https://sudarshan217.github.io/iNoteBook/'
        },
        {
            id: 2,
            image: image1,
            title: "Project-2",
            github: 'https://github.com/Sudarshan217',
            demo: 'https://sudarshan217.github.io/iNoteBook/'
        }
    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__items-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__items-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
