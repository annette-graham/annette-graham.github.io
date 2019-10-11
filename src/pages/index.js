import React from "react"

import SEO from "../components/seo"

import Home from "./Home"
import About from "./About"


const App = () => {

  return (
    <div>
      <SEO title="Annette Graham" keywords={[`gatsby`, `application`, `react`]} />
      <div className='main'>
        <Home />
      </div>
      <div className='about'>
        <br />
        <About />
      </div>
    </div>
  )
}

export default App
