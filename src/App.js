import React from 'react'
import './styles/_main.scss'

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Tech from "./pages/Tech"
import Contact from "./pages/Contact"

import Header from "./components/molecules/Header"

const App = () => {

  return (
    <div className="App">

      <Header className="sticky" />

      <div className="main-bg" />
      <div className='main'>
        <Home />
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='projects'>
        <Projects />
      </div>
      <div className='tech'>
        <Tech />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default App;
