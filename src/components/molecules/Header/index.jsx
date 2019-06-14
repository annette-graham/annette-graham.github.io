import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../../atoms/Logo'
import styles from './header.module.css'
import data from '../../../data.json'



let links = data.links.map(link => {
  return (
    <Link
      key={link}
      className={styles.anchorLink}
      to="https://www.google.com"
    >
    {link}
  </Link>
  )
})

const Header = ({ siteTitle }) => (

  <div className={styles.nav}>
    <div className={styles.header}>
        <Link
          className={styles.headerLink}
          to="/"
          >
          <Logo
            siteTitle={ siteTitle }
          />
        </Link>
      <div className={styles.anchorLinks}>
        {links}
      </div>
    </div>
  </div>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
