import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='w-full mt-8 px-18 py-4 bg-neutral-900'>
        <div className='w-full pb-4 flex items-center justify-between gap-6 border-b-2 border-gray-700'>
          <div>
            <h1 className='text-white text-2xl font-bold'>GeoScope.</h1>
          </div>
          <div className='text-sm text-white font-normal flex items-center gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/country'>Country</Link>
            <Link to='/contact'>Contacts</Link>
          </div>
          <div>
            <p className='text-sm text-white font-bold cursor-pointer'>samarjeetsabale1021@gmail.com</p>
          </div>
        </div>
        <div className='w-full mt-4'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-sm text-white font-bold'>© 2026-2027 GeoScope, all rights reserved</p>
            <div className='flex items-center gap-2 text-white text-[1.2rem] font-extralight'>
              <Link to="https://github.com/samarjeets10" target='_blank'><i class="ri-github-line"></i></Link>
              <Link to="https://www.linkedin.com/in/samarjeet-sabale-9254b82ba/" target='_blank'><i class="ri-linkedin-box-line"></i></Link>
              <Link to="https://x.com/SamarjeetSabale" target='_blank'><i class="ri-twitter-x-line"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
