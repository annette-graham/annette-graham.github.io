import React from "react"
<<<<<<< HEAD
import sloth from '../../images/happy-sloth.jpg'

const About = () => {
  return (
    <section id="/about" className='body target'>
      <div className='body-content target'>
        <h1 className="header-text">ABOUT ME HOLY MOLY</h1>
        <img alt="Sloth waving and saying hi" src={sloth} className='image hi-image' />
        <img alt="me" src='https://picsum.photos/id/237/250/250
' className='image me-image' />

        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <p>This is what I am about</p>
        <br/>
        <br/>
        <a href="/" className='anchorLink'>Go back to the homepage</a>
      </div>   
    </section>
=======
import { Link } from "gatsby"

import Header from "../../components/molecules/Header"

import SEO from "../../components/seo"

const About = () => {
  return (
    <div className="body">
      <SEO title="About" />
      <Header className="sticky" />
      <h1>ABOUT ME HOLY MOLY</h1>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>
      <p>This is what I am about</p>

      <Link to="/">Go back to the homepage</Link>
    </div>
>>>>>>> 9e4cfeb0561a794756bd9c27129cab7f39c7534f
  )
}

export default About
