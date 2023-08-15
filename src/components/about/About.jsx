import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Llegar a saber</h5>
      <h2>Sobre mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'></FaAward>
              <h5> Experiencia </h5>
              <small>3+ años</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'></FiUsers>
              <h5>Clientes </h5>
              <small>200+ en todo el mundo</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'></VscFolderLibrary>
              <h5> Proyectos</h5>
              <small>80+ completados</small>
            </article>
          </div>
          <p>¿Qué servicio ofrezco? Actualmente diseño, rediseño y programo sitios de aplicaciones web</p>
          <a href="#contact" className='btn btn-primary' >¡Contáctame!</a>
        </div>
      </div>


    </section>
  )
}

export default About