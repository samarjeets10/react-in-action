import React from 'react'

function Hero() {
  return (
    <div>
        <div className='w-fit px-2 py-1 bg-gray-200 rounded-2xl'>
            <p className='text-sm'>Our Stories</p>
        </div>

        <div className='mt-6 w-full flex-col md:flex-row md:flex items-baseline justify-between'>
            <div>
            <h1 className='text-5xl md:text-7xl font-semibold text-nowrap'>Photo Gallery</h1>
            </div>

            <div className='w-full flex flex-col items-end mt-4 md:max-w-[500px]'>
            <p className='text-nowrap text-sm md:text-lg'>A digital canvas for striking visual stories,</p>
            <p className=' text-nowrap text-sm pr-0 md:text-lg md:pr-10'>designed for the observant, modern soul.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
