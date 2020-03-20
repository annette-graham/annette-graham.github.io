import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../../atoms/Logo'
import data from '../../../data.json'


let links = data.links.map(link => {
  return (
    <a
      href={link.url}
      key={link.name}
      id={link.name}
      className='header-link anchorLink'>
      {link.name}
    </a>
  )
})


const Header = ({ className }) => {

  return (
    <header className={`root ${className}`}>
      <Logo />
      <div className='anchorLinks'>
        {links}
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
