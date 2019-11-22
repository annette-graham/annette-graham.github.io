import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../../atoms/Logo'
import data from '../../../data.json'


let links = data.links.map(link => {
  return (
    <a
      href={link.url}
      key={link.name}
      className='anchorLink'>
      {link.name}
    </a>
  )
})


const Header = ({className}) => {

  return (
    <header className={`root ${className}`}>
      <Logo />
      <div className='anchorLinks'>
        {links}
        {/* <a href='#/about' className='anchorLink'>About Me  |</a>
        <a href='#/projects' className='anchorLink'>Projects  |</a>
        <a href='#/tech' className='anchorLink'>Technology  |</a>
        <a href='#/contact' className='anchorLink'>Contact Me</a> */}
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
