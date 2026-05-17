import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  const [imgData, setImgData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    
    setImgData(response.data);
    console.log(response.data);
  };

  getData();

  return (
    <>
      <div className='w-full h-full min-h-screen bg-white'>
        {/* Navigation Bar */}
        <NavBar />

        <main className='max-w-[80%] m-auto mt-26 md:mt-32'>
          {/* Hero section */}
          <Hero />

          <div className='w-full pt-4 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            
          </div>

        </main>

        <div className='w-full mt-12'>
          {/* Footer section */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
