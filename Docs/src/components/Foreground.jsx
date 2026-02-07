import React, { useState } from 'react'
import Card from './Card'

function Foreground() {

    const data = [
        {
            description : "This is the background color of the card that will be displayed.",
            filesize : "0.9mb",
            close : true,
            tags : {
                isOpen : true,
                tagTitle : "Download Now",
                tagColor: "green"
            },

        }
    ]

    useState()

  return (
    <div>
      <div className='fixed top-0 left-0 z-[3] w-full h-full '>

        {data.map((item, idx) => (
            <Card data={item} key={idx} />
        ))}

      </div>
    </div>
  )
}

export default Foreground
