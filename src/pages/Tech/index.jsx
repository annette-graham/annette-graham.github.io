import React from 'react'
import sloth from '../../images/hangy-sloth.png'

import Heading from '../../components/atoms/Heading'


const Tech = () => {

  return (

    <section id="/tech" className='body'>
      <div className='body-content'>
        <img alt="Sloth doing tree pose" src={sloth} className='image yoga-image' />
        <Heading
          title='HERE IS THE TECH I USE'
        />
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <p>I use tech.</p>
        <br />
      </div>
    </section>
  )
}


export default Tech
