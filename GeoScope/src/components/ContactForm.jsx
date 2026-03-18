import React from 'react'

function ContactForm() {

  const handelFormSubmit = (formData) => {
    // console.log(formData.entries());
    
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }

  return (
    <div>
        <div className='min-w-[450px] mt-[0.5rem] py-[1.2rem] px-[1.6rem] rounded-xl '>
            <h1 className='text-3xl text-white font-semibold text-center'>Contact Us</h1>

            <form action='submit' className='w-full mt-8 flex flex-col gap-6'>
            <input type="text" name='username' required autoComplete='false' placeholder='enter your name..' className='w-full px-3 py-1.5 border-1 border-white rounded-md text-white outline-none' />

            <input type="email" name='email' required autoComplete='false' placeholder='enter email..' className='w-full px-3 py-1.5 border-1 border-white rounded-md text-white outline-none' />

            <textarea placeholder='enter your message..' rows={10} className='w-full min-h-[120px] py-1.5 px-3 text-white max-h-[120px] border-1 border-white rounded-md'></textarea>

            <button formAction={handelFormSubmit} className='text-[1rem] text-white border-1 border-white py-1.5 rounded-lg cursor-pointer'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
