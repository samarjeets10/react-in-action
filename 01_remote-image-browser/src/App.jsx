import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {

  

  return (
    <>
      <div className='w-full min-h-screen bg-white px-4'>
        {/* Navigation Bar */}
        <NavBar />

        <main className='max-w-[90%] m-auto mt-26 md:mt-32'>
          {/* Hero section */}
          <Hero />

        </main>
      </div>
    </>
  )
}

export default App
