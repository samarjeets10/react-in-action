import React from 'react'
import CountryData from '../API/countryData.json'
function About() {

  console.log(CountryData);

  return (
    <div className='w-full'>
      <div className='w-full mt-6 mb-14 flex items-center justify-center text-center'>
        <h1 className='text-3xl font-semibold leading-8'>Here are the Intesting Facts
          <br />
          we're proud of
        </h1>
      </div>
      
      <div className='card_container w-full py-8 px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-3 gap-6'>

        {CountryData.map((country) => {
          // destructuring :
          const {id, countryName,capital, population, interestingFacts} = country;

          return <div className='card p-4 rounded-2xl bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-1 border-neutral-300 font-bold text-white' key={id}>
                    <h2 className='text-xl font-bold mb-2'>{countryName}</h2>
                    <p>
                      <span className='text-[1.1rem] text-gray-400 font-semibold'>capital: </span>
                      {capital}
                    </p>
                    <p>
                      <span className='text-[1.1rem] text-gray-400 font-semibold'>Population: </span>
                      {population}
                    </p>
                    <p>
                      <span className='text-[1.1rem] text-gray-400 font-semibold'>Intersting Facts: </span>
                      {interestingFacts}
                    </p>
                </div>
        })}
        

      </div>
    </div>
  )
}

export default About
