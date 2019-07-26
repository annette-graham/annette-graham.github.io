import React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"

const About = () => {
  return (
    <div className="main-body">
      <SEO title="About" />
      <h1>ABOUT ME HOLY MOLY</h1>
      <p>This is what I am about</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default About
