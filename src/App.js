import React from 'react'
import './styles/_main.scss'
import upArrow from './images/up-arrow.svg'

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Tech from "./pages/Tech"
import Contact from "./pages/Contact"

import Header from "./components/molecules/Header"

const App = () => {

  // const topArrow = document.getElementById('scroll-button')

  // window.onscroll = () => scrollFunction()

  // const scrollFunction = () => {
  //   document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 
  //     ? topArrow.style.display = "block"
  //     : topArrow.style.display = "none"
  // }

  // const topFunction = () => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  return (
    <div className="App">

      <Header className="sticky" />

      <div className="main-bg" />
      <div className='main'>
        <Home />
      </div>
      {/* <button onclick={topFunction()} id="scroll-button" className="top-scroller js-top-scroller svg-icons" title="Go to top">
       <img alt="Back to Top" src={upArrow} className="scroller-svg" />
      </button> */}
      <a href="#top" id="scroll-button" className="top-scroller js-top-scroller svg-icons">
        <img alt="Back to Top" src={upArrow} className="scroller-svg" />
      </a>
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
