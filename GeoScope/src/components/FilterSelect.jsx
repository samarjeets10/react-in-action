import React from 'react'

function FilterSelect({ filter, setFilter }) {

    function handleSelectChange(event) {
        event.preventDefault();
        setFilter(event.target.value);
    };


  return (
    <div>
        <div className='px-4 py-1 border-1 border-white text-white rounded-full'>
            <select className='w-full outline-none' value={filter} onChange={handleSelectChange}>
                <option className='text-black' value="all">All</option>
                <option className='text-black' value="Africa">Africa</option>
                <option className='text-black' value="Americas">Americas</option>
                <option className='text-black' value="Asia">Asia</option>
                <option className='text-black' value="Europe">Europe</option>
                <option className='text-black' value="Oceania">Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default FilterSelect
