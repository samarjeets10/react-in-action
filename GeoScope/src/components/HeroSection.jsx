import React from 'react'

function HeroSection() {
  return (
    <div>
        <div className='w-full py-[3rem] px-12 flex items-center justify-between gap-[6rem]'>
            <div className='w-[60%] flex flex-col gap-4'>
                <h2 className='text-[3.5vw] font-semibold leading-13'>Explore the World, One Country at a Time.</h2>
                <p className='text-md text-white'>Navigate the globe through a lens of precision. Your curated gateway to real-time country data and worldwide intelligence.</p>
                
                <div className='w-fit px-4 mt-2 text-white py-2 border-2 border-white rounded-full flex items-center gap-4 cursor-pointer'>
                    <button className='cursor-pointer'>Start Exploring</button>
                    <i class="ri-arrow-right-long-line"></i>
                </div>
            </div>

            <div className='w-[40%] h-full overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xvYmV8ZW58MHx8MHx8fDA%3D" alt="image" className='h-full w-full object-cover object-center' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
