import React from 'react'

function ContactForm() {

  return (
    <div>
        <div className='min-w-[450px] mt-[0.5rem] py-[1.2rem] px-[1.6rem] rounded-xl '>
            <h1 className='text-3xl text-white font-semibold text-center'>Contact Us</h1>

            <form action="submit" className='w-full mt-8 flex flex-col gap-6'>
            <input type="text" required autoComplete='false' placeholder='enter your name..' className='w-full px-3 py-1.5 border-1 border-white rounded-md placeholder-gray-300 outline-none' />

            <input type="text" required autoComplete='false' placeholder='enter email..' className='w-full px-3 py-1.5 border-1 border-white rounded-md placeholder-gray-300 outline-none' />

            <textarea className='w-full min-h-[120px] py-1.5 px-3 max-h-[120px] border-1 border-white rounded-md'></textarea>

            <button action='submit' className='text-[1rem] text-white border-1 border-white py-1.5 rounded-lg cursor-pointer'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
