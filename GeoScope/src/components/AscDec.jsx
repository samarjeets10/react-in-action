import React from 'react'

function AscDec( {country , setCountry}) {

    function sortCountry(value) {

        const sortCountry = [...country].sort((a, b) => {
            return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
        });

        setCountry(sortCountry);
    }

  return (
    <div>
        <div className='flex items-center gap-4 text-sm text-white font-bold'>
            <button onClick={() => sortCountry("asc")} className='px-2 border-1 border-white rounded-md cursor-pointer hover:bg-white hover:text-black transition-all transition-[2s] ease-in-out'>Asc</button>
            <button onClick={() => sortCountry("dec")} className='px-2 border-1 border-white rounded-md cursor-pointer hover:bg-white hover:text-black transition-all transition-[2s] ease-in-out'>Dsc</button>
        </div>
    </div>
  )
}

export default AscDec
