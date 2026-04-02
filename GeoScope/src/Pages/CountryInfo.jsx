import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import CountrySepCard from '../components/CountrySepCard';
import { getCountrySepData } from '../API/postApi';

function CountryInfo() {

  const [isPending, startTransition] = useTransition([]);
  const [country, setCountry] = useState();

  const params = useParams();
  console.log(params);

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountrySepData(params.parameter);
      
      if (resp.status === 200) {
        setCountry(resp.data[0]);
        console.log(resp.data[0]);
      }
  
    })

  }, []);

  if (isPending || !country) return <div className='w-full h-[55vh] flex items-center justify-center'>
    <h1 className='text-3xl text-white font-bold flex self-center justify-self-center'>Loading...</h1>
  </div>

  
  return (
    <div>
      <div className='w-full px-8 py-8 flex items-center justify-center'>
        <CountrySepCard country={country} />
      </div>
    </div>
  )
}

export default CountryInfo


