import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className='w-full px-12 py-2.5 bg-[#4246a17c] rounded-full flex items-center justify-between'>
        <h1 className='text-[1.6rem] text-white font-bold'>GeoScope.</h1>

        <div className='flex items-center gap-8 text-[1rem] text-white font-semibold'>
            <Link to="/">Home</Link>
            <Link to="/country">Country</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/about">About</Link>
        </div>

      </nav>
    </div>
  )
}

export default NavBar
