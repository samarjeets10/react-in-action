import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  const [imgData, setImgData] = useState([]);
  const [index, setIndex] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
      setImgData(
        prev => [...prev, ...response.data]
      );
    } catch (error) {
      setError(error.message)
      console.log('error featching image ;', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);



  return (
    <>
      <div className='w-full h-full min-h-screen bg-white'>
        {/* Navigation Bar */}
        <NavBar />

        <main className='max-w-[80%] m-auto mt-26 md:mt-32'>
          {/* Hero section */}
          <Hero />

          <div className='w-full pt-4 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2'>

            {
              error && (
                <div className='mt-8 text-center text-red-600'>
                  Error loading images: {error}
                </div>
              )
            }
            
            {
              imgData.map((element)=> (
                <Card element={element} key={element.id} />
              ))
            }

            {
              isLoading && (
                  <div className='mt-6 w-full text-center text-lg text-gray-700'>
                    
                  </div>
              )
            }

          </div>

        </main>

        <div className='w-full p-8 mt-8 flex items-center justify-center'>
          <button 
          onClick={() => setIndex(prev => prev + 1)}
          className='px-6 py-2 rounded-lg bg-neutral-900 text-white cursor-pointer'
          >
            {
              isLoading ? "Loading..." : "More"
            }
          </button>
        </div>

        <div className='w-full mt-12'>
          {/* Footer section */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
