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
    <div className='h-full w-full px-18 py-8'>
      <div className='w-full grid grid-cols-4'>
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
