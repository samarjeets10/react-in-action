import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../API/postApi';
import CountryCard from '../components/CountryCard';

function Country() {

  const [isPending, startTransition] = useTransition([]);
  const [counrties, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountryData();
      setCountries(resp.data);
    })
  }, []);

  if (isPending) return <div className='w-full h-screen flex items-center justify-center'>
    <h1 className='text-3xl text-white font-bold flex self-center justify-self-center'>Loading...</h1>
  </div>


  return (
    <div className='h-full w-full px-18 py-4'>
      {/* <h1 className='text-center text-white text-4xl font-bold mt-2 mb-8'>Explore Country World Wide</h1> */}
      <div className='w-full py-2 flex items-center justify-between'>
        <div>
          <div className='px-4 border-1 border-white text-white rounded-full flex items-center gap-4'>
            <input type="text" placeholder='Search here..' className='py-1 outline-none' />
            <i class="ri-globe-line"></i>
          </div>
        </div>

        <div className='flex items-center gap-4 text-sm text-white font-bold'>
          <button className='px-2 border-1 border-white rounded-md cursor-pointer hover:bg-white hover:text-black transition-all transition-[2s] ease-in-out'>Asc</button>
          <button className='px-2 border-1 border-white rounded-md cursor-pointer hover:bg-white hover:text-black transition-all transition-[2s] ease-in-out'>Dsc</button>
        </div>
      </div>

      <div className='w-full mt-6 grid grid-cols-4 gap-6'>
        {
          counrties.map((curCountry, idx) => {
            return <CountryCard country={curCountry} key={idx} />
          })
        }
      </div>
    </div>
  )
}

export default Country
