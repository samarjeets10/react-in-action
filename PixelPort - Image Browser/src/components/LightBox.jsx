import React from 'react'

function LightBox( {selectedImage, setSelectedImage} ) {



  return (
    <div
    onClick={() => setSelectedImage(null)} 
    className='w-full h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/70 pt-[4rem]'>
        <div
        onClick={(e) => e.stopPropagation()} 
        className='w-[90%] min-h-[50vh] md:w-[50%] bg-white p-8'>
            <div className='w-full overflow-hidden'>
                <img src={selectedImage.download_url} alt={`Photo by ${selectedImage.author}`} className='h-full w-full object-cover object-center' />
            </div>
            <div className='mt-2'>
                <h1>Author : {selectedImage.url}</h1>
                <p><strong>Dimensions:</strong> {selectedImage.width} x {selectedImage.height}</p>
                <p><strong>ID:</strong> {selectedImage.id}</p>
            </div>
        </div>
    </div>
  )
}

export default LightBox
