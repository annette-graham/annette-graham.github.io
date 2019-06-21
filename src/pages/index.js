import React from "react"
import { Link } from "gatsby"

import styles from './body.module.css'
import SEO from "../components/seo"

import Header from "../components/molecules/Header"
import Home from "./Home"
import About from "./About"


const App = () => {

  return (
    <div>
      <SEO title="Annette Graham" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <div className={styles.body}>
        <Home />
        <About />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default App
