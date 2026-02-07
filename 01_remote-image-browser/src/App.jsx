import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {

  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    setUserData(response.data);
  }

  useEffect(function() {
    getData()
  }, [page]);

  let printUserData = <h2 className='text-xl font-bold text-gray-400'>No User Available!!</h2>

  if(userData.length > 0) {
    printUserData = userData.map(function(elem, idx) {
      return <div>
        <a href={elem.url} target='_blank'>
          <div className='h-50 w-65 rounded-xl overflow-hidden cursor-pointer bg-white hover:scale-102 transition-all duration-200 ease '>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="image" />
          </div>
        </a>
        <h2 className='px-1 font-bold' key={idx}>{elem.author}</h2>
      </div>
    });
  }

  return (
    <>
      <div className='bg-black p-4 h-screen w-screen text-white overflow-auto scroll-smooth'>
        <div className='w-full flex items-center justify-center flex-wrap gap-3'>
          {printUserData}
        </div>

        <div className='w-full mt-10 flex items-center justify-center gap-5 '>
          <button className='px-3.5 py-1 bg-red-500 text-sm text-white font-bold rounded-md cursor-pointer active:scale-90 duration-150 ease-in'
          onClick={() => {
            setPage((prev) => prev + 1);
          }}>
            Prev
          </button>
          <button className='px-3.5 py-1 bg-blue-400 text-sm text-white font-bold rounded-md cursor-pointer active:scale-95 '
          onClick={() => {
            setPage((prev) => prev - 1);
          }}>
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App
