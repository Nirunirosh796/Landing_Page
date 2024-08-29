import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  

  return (
   <div>
    <Home/>
    <About/>
    <Work/>
    <Testimonial/>
    
    <Footer/>
    <Content/>
   </div>
  )
}

export default App
