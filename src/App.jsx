import { useState } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import DrVideo from './components/common/DrVideo'
import AboutUnify from './components/common/AboutUnify'
import Footer from './components/common/footer'

function App() {

  return (
    <>
      <Navbar />
      <DrVideo />
      <AboutUnify />
      <Footer />
    </>
  )
}

export default App
