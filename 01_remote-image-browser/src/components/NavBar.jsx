import React from 'react'

function NavBar() {
  return (
    <div className='w-full px-6 py-4 bg-white flex items-center justify-between fixed top-0 left-0 z-99'>
        <div className='text-3xl flex items-center gap-2'>
        <i class="ri-unsplash-line"></i>
        <h3 className='text-2xl font-bold'>Photos</h3>
        </div>

        <ul className='md:flex items-center justify-between gap-14 text-lg hidden'>
        <li className='cursor-pointer hover:text-neutral-500'>Home</li>
        <li className='cursor-pointer hover:text-neutral-500'>Gallery</li>
        <li className='cursor-pointer hover:text-neutral-500'>About</li>
        </ul>

        <div>
        <button className='px-3 py-2 bg-neutral-900 text-white rounded-lg cursor-pointer hover:bg-neutral-800'>Browse</button>
        </div>
    </div>
  )
}

export default NavBar
