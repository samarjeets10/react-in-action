import React from 'react'

function CountrySepCard({ country }) {

  return (
    <div className='w-full'>
        {country && (
            <div className='w-full bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-1 border-neutral-300 rounded-xl flex items-center justify-center'>
                <div className='w-[75%] px-8 py-8 flex items-center justify-between gap-4'>

                    <div className='w-full'>
                        <div className='h-[220px] w-[320px] border-2 border-white overflow-hidden rounded-2xl'>
                            <img className='h-full w-full object-cover object-center' src={country.flags.svg} alt={country.flags.alt} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-2xl leading-6 mb-4 text-white font-bold'>{country.name.common}</h2>
                        <div className='text-white text-md mt-4 font-bold flex flex-col gap-2'>
                            <p><span className='text-lg text-gray-400'>Official Name: </span>{country.name.official}</p>
                            <p><span className='text-lg text-gray-400'>Native Name: </span>{
                                Object.keys(country.name.nativeName).map((native) => country.name.nativeName[native].common).join(', ')
                            }</p>
                            <p><span className='text-lg text-gray-400'>Capital: </span>{country.capital[0]}</p>
                            <p><span className='text-lg text-gray-400'>Population: </span>{country.population}</p>
                            <p><span className='text-lg text-gray-400'>Curencies: </span>{
                                Object.keys(country.currencies).map((curElem) => country.currencies[curElem].name).join(", ")
                            } {Object.keys(country.currencies).map((curElem) => country.currencies[curElem].symbol).join(", ")} </p>
                            <p><span className='text-lg text-gray-400'>Region: </span>{country.region}</p>
                            <p><span className='text-lg text-gray-400'>Sub Region: </span>{country.subregion}</p>
                            <p><span className='text-lg text-gray-400'>Languages: </span>{
                                Object.keys(country.languages).map((lang) => country.languages[lang]).join(", ")
                            }</p>
                            <p><span className='text-lg text-gray-400'>TLD: </span>{
                                country.tld.map((key) => key)
                            }</p>
                        </div>
                    </div>

                </div>
            </div>
        )}
    </div>
  )
}

export default CountrySepCard
