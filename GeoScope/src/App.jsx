import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import About from './Pages/About'
import Error from './Pages/Error'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import CountryPage from './Pages/CountryPage'
import CountryInfo from './Pages/CountryInfo'


function App() {


  return (
    <>
      <div className='min-h-screen w-full bg-black font-mono flex flex-col'>

          <div className='w-full'>
            <NavBar />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/country' element={<Country />} />
            
            <Route path='/country/:parameter' element={<CountryInfo />} />

            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>



         <div className='w-full text-2xl font-semibold'>
            <Footer />
         </div>
      </div>
    </>
  )
}

export default App
