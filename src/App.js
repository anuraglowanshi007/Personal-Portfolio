import React from 'react'
import Navbar  from './components/Navbar'
import Home from './components/Home'
import SocialLink from './components/SocialLink'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
     <Navbar/> 
     <Home/>
     <SocialLink/>
     <About/>
     <Portfolio/>
     <Skills/>
     <Contact/>
   </div>
  )
}

export default App