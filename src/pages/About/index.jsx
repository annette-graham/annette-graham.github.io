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
        <img alt="Sloth waving and saying hi" src={sloth} className='image hi-image' />
        <img alt="me" src='https://picsum.photos/id/237/250/250' className='image me-image' />

        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <br/>
        <br/>
        <a href="/" className='anchorLink'>Go back to the homepage</a>
      </div>   
    </section>
  )
}

export default About
