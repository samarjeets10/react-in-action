import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-neutral-900 py-8 px-14 flex items-center justify-between'>
        <div className='flex flex-col gap-1.5'>
            <h1 className='text-6xl font-semibold text-white'>Frame.</h1>
            <p className='text-neutral-400 text-md'>A Photo Gallery Platfoem</p>

            <div className='p-3 mt-4 flex items-center justify-between gap-4 bg-neutral-800 rounded-4xl border-1 border-white'>
            <p className='text-white'>Back to Top</p>
            
            <div className='h-[25px] w-[25px] flex items-center justify-center rounded-full bg-white'>
                <i class="ri-arrow-up-line"></i>
            </div>
            </div>
        </div>
        <div className='flex flex-col items-end'>
            
            <p className='text-white'>Every pixel tells a story.Thanks for stepping into the canvas.</p>
        </div>
    </footer>
  )
}

export default Footer
