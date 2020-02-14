import React from 'react'
import sloth from '../../images/hanging-sloth.png'

import Heading from '../../components/atoms/Heading'


const Projects = () => {

  return (

    <section id="/projects" className='body'>
      <div className='body-content'>
        <img alt="Sloth hanging from a branch" src={sloth} className='image hanging-image' />
        <Heading
          title='I GOT SWEET F-A PROJECTS'
        />
        <p>This is my project.</p>
        <p>Literally, what else you expect?</p>
        <p>I got nothin else r u happy!?!?!</p>
        <p>Stop laughing</p>
        <p>Dick.</p>
        <br />
      </div>
    </section>
  )
}


export default Projects
