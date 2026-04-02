import React from 'react'
import { Link } from 'react-router-dom';

function CountryCard({ country }) {

    const {name, capital, population, flags, region} = country;

  return (
    <div key={country.id}>
      <div className='p-4 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-1 border-neutral-300 rounded-xl'>
        <div className='w-full rounded-xl overflow-hidden border-2 border-white'>
            <img src={flags.svg} alt={flags.alt} className='h-[8rem] w-full object-cover object-center' />
        </div>
        <div className='py-6'>
            <h2 className='text-xl leading-6 text-white font-bold'>{name.common.length > 10 ? name.common.slice(0, 10) + `...` : name.common}</h2>
            <div className='text-white text-md mt-4 font-bold'>
                <p><span className='text-gray-400'>Population: </span>{population}</p>
                <p><span className='text-gray-400'>Region: </span>{region}</p>
                <p><span className='text-gray-400'>Capital: </span>{capital[0]}</p>
            </div>
            <Link to={`/country/${name.common}`}>
              <button className='px-4 py-1 border-1 mt-4 border-white text-white font-bold rounded-full transition-all transition-[2s] ease-in-out hover:bg-white hover:text-black cursor-pointer'>Read more <i class="ri-arrow-right-long-line"></i></button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
