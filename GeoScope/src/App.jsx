import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import About from './Pages/About'
import Error from './Pages/Error'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <div className='min-h-screen w-screen bg-black font-mono'>

          <div className='w-full p-2.5'>
            <NavBar />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/country' element={<Country />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>



         <div className='w-full px-2.5 fixed bottom-0 left-0 bg-red-400'>
            <Footer />
         </div>
      </div>
    </>
  )
}

export default App
