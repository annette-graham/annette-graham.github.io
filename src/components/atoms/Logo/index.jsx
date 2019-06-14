import React from 'react'
import styles from './logo.module.css'

import sloth from '../../../images/yoga-sloth.png'

const Logo = ({ siteTitle }) => {

  return (
    <div>
      <img alt="" src={sloth} className="logo"/>
      { siteTitle }
    </div>
  )


}


export default Logo
