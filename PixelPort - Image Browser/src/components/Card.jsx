import React from 'react'

function Card({ element, index }) {

  return (
    <div key={index} 
    className='min-w-[360px] w-full h-[380px] overflow-hidden'
    // style={{aspectRatio: `${element.height} / ${element.width}`}}
    >
        <img 
        className='h-full w-full object-cover object-center cursor-pointer transition delay-100 duration-150 hover:grayscale-75 hover:scale-105'
        src={element.download_url}
        alt={element.author} />
    </div>
  )
}

export default Card
