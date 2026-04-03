import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../API/postApi';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';
import FilterSelect from '../components/FilterSelect';
import AscDec from '../components/AscDec';

function Country() {

  const [isPending, startTransition] = useTransition([]);
  const [counrties, setCountries] = useState([]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  console.log(filter, search);

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountryData();
      setCountries(resp.data);
    })
  }, []);


  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  }

  const filterCountries = counrties.filter((country) => searchCountry(country) && filterRegion(country));



  if (isPending) return <div className='w-full h-[55vh] flex items-center justify-center'>
    <h1 className='text-3xl text-white font-bold flex self-center justify-self-center'>Loading...</h1>
  </div>


  return (
    <div className='h-full w-full px-18 py-4'>
      {/* <h1 className='text-center text-white text-4xl font-bold mt-2 mb-8'>Explore Country World Wide</h1> */}
      <div className='w-full py-2 flex items-center justify-between'>
        <div>
          {/* Search filter Bar */}
          <SearchFilter search={search} setSearch={setSearch} />
        </div>

        <div>
          <AscDec country={counrties} setCountry={setCountries} />
        </div>

        <div>
          {/* Filter Select Bar */}
          <FilterSelect filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <div className='w-full mt-6 grid grid-cols-4 gap-6'>
        {
            filterCountries.map((curCountry, idx) => {
            return <CountryCard country={curCountry} key={idx} />
          })
        }
      </div>
    </div>
  )
}

export default Country
