import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from './components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default Home