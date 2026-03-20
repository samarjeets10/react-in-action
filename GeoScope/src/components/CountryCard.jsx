import React from 'react'

function CountryCard({ country }) {

    const {name, capital, population, flags, region} = country;
  return (
    <div key={country.id}>
      <h1 className='text-xl text-white font-bold'>{capital}</h1>
      <h1 className='text-xl text-white font-bold'>{name.official}</h1>
      <h1 className='text-xl text-white font-bold'>{region}</h1>
    </div>
  )
}

export default CountryCard
