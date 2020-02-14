import React from 'react'
import sloth from '../../images/reading-sloth2.png'

import Heading from '../../components/atoms/Heading'
import Form from '../../components/molecules/Form'


const Contact = () => {

  return (

    <section id="/contact" className='body'>
      <div className='body-content'>
        <img alt="Sloth reading a piece of paper" src={sloth} className='image reading-image' />
        <Heading
          title='Contact me biatch'
        />
        <div>
          <Form />
          <p>I got email.</p>
          <p>I got insta.</p>
          <p>I got gihub.</p>
          <p>I got bloody facebook.</p>
          <p>I got codepen.</p>
          <p>what the heck else you want??</p>
          <p>LinkedIn?</p>
          <p>Coz I got that too.</p>
          <br />
        </div>
    </div>
    </section>
  )
}


export default Contact
