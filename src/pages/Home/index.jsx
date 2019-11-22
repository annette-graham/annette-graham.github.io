import React from 'react'
import sloth from '../../images/yoga-sloth.png'


const Home = () => {

  return (

    <div className="body home-body">
       <div className='home-content'>
          <img alt="Sloth doing tree pose" src={sloth} className='logoImage' />
          <h1 className="header-text">I AM ANNETTE AND I AM A SOFTWARE ENGINEER OKAY.<br />GOSH</h1>
          <p>Now go build something great.</p>
          <br/>
          <a href='#/about' className='anchorLink'>Down Arrow</a>
       </div>
    </div>

  )
}


export default Home
