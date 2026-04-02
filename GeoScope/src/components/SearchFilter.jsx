import React from 'react'

function SearchFilter( { search, setSearch}) {

    function handleInputChange(event) {
        event.preventDefault();
        setSearch(event.target.value);
    }

    console.log(search);


  return (
    <div>
        <div className='px-4 py-1 border-1 border-white text-white rounded-full flex items-center gap-4'>
            <input className='py-1 outline-none' type="text" placeholder='Search here..' value={search} onChange={handleInputChange} />
            <i class="ri-globe-line"></i>
        </div>
    </div>
  )
}

export default SearchFilter
