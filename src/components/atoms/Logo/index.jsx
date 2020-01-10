import React from 'react'
// import { NavLink } from 'react-router-dom'

import sloth from '../../../images/yoga-sloth.png'

const Logo = ({ siteTitle }) => {

  return (
    <a
      className='logoLink'
      href="/"
    >
      <img alt="Sloth doing tree pose" src={sloth} className='logoImage'/>
      <span className='logoText'>A.G</span>
    </a>
  )


}


export default Logo
