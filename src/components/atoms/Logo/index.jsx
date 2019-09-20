import React from 'react'
import { Link } from "gatsby"

import sloth from '../../../images/yoga-sloth.png'

const Logo = ({ siteTitle }) => {

  return (
    <div className='logo'>
      <Link
        className='logoLink'
        to="/"
      >
        <img alt="" src={sloth} className='logoImage'/>
        <span className='logoText'>A.G</span>
      </Link>
    </div>
  )


}


export default Logo
