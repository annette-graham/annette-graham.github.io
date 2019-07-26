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


const Header = (props) => {

  const test = props.class
  console.log(test)
  return (
    <div className={styles[test]}>
      <Logo />
      <div className={styles.anchorLinks}>
        {links}
      </div>
    </div>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
