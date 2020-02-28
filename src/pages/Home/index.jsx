import React from 'react'
import sloth from '../../images/yoga-sloth.png'

import Heading from '../../components/atoms/Heading'


const Home = () => {
   
  const arr = ['I AM ANNETTE AND I AM A SOFTWARE ENGINEER OKAY.', <br/>, 'GOSH']

  return (
    <section className="body home-body">
      <div className='home-content'>
        <img alt="Sloth doing tree pose" src={sloth} className='logoImage' />
        <Heading
          title={arr}
        />
        <p>Welcome to my website that I built for myself.</p>
        <br/>
        <a href='#/about' className='anchorLink'>Down Arrow</a>
      </div>
    </section>

  )
}


export default Home
