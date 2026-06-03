import React from 'react'

function Card({ element }) {

  const width = 600;
  const height = 400;
  const imageUrl = `https://picsum.photos/id/${element.id}/${width}/${height}`;



  return (
    <div 
    className='min-w-[360px] w-full h-[380px] overflow-hidden'
    >
        <img 
        loading='lazy'
        decoding='async'
        className='h-full w-full object-cover object-center cursor-pointer transition delay-100 duration-150 hover:grayscale-75 hover:scale-105'
        src={imageUrl}
        alt={`Photo by ${element.author}`} />
    </div>
  )
}

export default Card
