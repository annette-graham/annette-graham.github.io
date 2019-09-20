import React from "react"

import SEO from "../components/seo"

import Header from "../components/molecules/Header"
import Home from "./Home"
import About from "./About"


const App = () => {

  return (
    <div>
      <SEO title="Annette Graham" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <div className='body'>
        <Home />
      </div>
      <Header />
      <div className='body'>
        <br />
        <About />
      </div>
    </div>
  )
}

export default App
