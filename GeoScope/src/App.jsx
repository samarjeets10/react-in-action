import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <div className='h-screen w-screen bg-[#202020]'>

          <div className='w-full p-2.5'>
            <NavBar />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/country' element={<Country />} />
            <Route path='/about' element={<About />} />
          </Routes>

         <div className='w-full px-2.5'>
            <Footer />
         </div>
      </div>
    </>
  )
}

export default App
