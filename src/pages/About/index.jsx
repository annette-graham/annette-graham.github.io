import React from "react"
import sloth from '../../images/happy-sloth.jpg'

import Heading from '../../components/atoms/Heading'


const About = () => {
  return (
    <section id="/about" className='body target'>
      <div className='body-content target'>
        <Heading
          title='ABOUT ME HOLY MOLY'
        />
        <div className="about-container">
          <div className="about-content">
          <img alt="me" src='https://picsum.photos/id/237/250/250' className='image me-image' />
          <img alt="Sloth waving and saying hi" src={sloth} className='image hi-image' />
          <div className="about-text">
            <p>This is what I'm about aite</p>
            <br/>
            <p>I'm Annette. I am a software engineer working at the good old BBC lol.</p>
            <p>I did a 9 week webdev bootcamp in NZ then got this job right after.</p>
            <p>Got promoted from junior to midweight within a year so idk guess I'm pretty dope at my job ayeee</p>
            <br/>
            <p>I like sloths</p>
            <p>I'm 26</p>
            <p>Live in London atm</p>
            <p>Killing life</p>
            <p>Chill af</p>
            <p>et cetera</p>
            <br/>
            <p>Thas me. Any more just ask no what I'm sayin'</p>
            <br/>
            <br/>
            <a href="/" className='anchorLink'>Go back to the homepage fool</a>
          </div>
          </div>
        </div>
      </div>   
    </section>
  )
}

export default About
