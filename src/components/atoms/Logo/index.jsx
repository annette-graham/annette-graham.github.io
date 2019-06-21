import React from 'react'
import { Link } from "gatsby"

import styles from './logo.module.css'

import sloth from '../../../images/yoga-sloth.png'

const Logo = ({ siteTitle }) => {

  return (
    <div className={styles.logo}>
      <Link
        className={styles.logoLink}
        to="/"
      >
        <img alt="" src={sloth} className={styles.logoImage}/>
        <span className={styles.logoText}>A.G</span>
      </Link>
    </div>
  )


}


export default Logo
