import React from "react"

import styles from './body.module.css'
import SEO from "../components/seo"

import Header from "../components/molecules/Header"
import Home from "./Home"
import About from "./About"


const App = () => {

  return (
    <div>
      <SEO title="Annette Graham" keywords={[`gatsby`, `application`, `react`]} />
      <Header class="nav" />
      <div className={styles.body}>
        <Home />
      </div>
      <Header class="sticky" />
      <div className={styles.body}>
        <br />
        <About />
      </div>
    </div>
  )
}

export default App
