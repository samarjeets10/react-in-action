import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            description : "This is the background color of the card that will be displayed.",
            filesize : "0.9mb",
            close : false,
            tags : {
                isOpen : false,
                tagTitle : "Download Now",
                tagColor: "green"
            }

        },

        {
            description : "This is the background color of the card that will be displayed.",
            filesize : "0.4mb",
            close : false,
            tags : {
                isOpen : true,
                tagTitle : "Download Now",
                tagColor: "blue"
            }

        },

        {
            description : "This is the background color of the card that will be displayed.",
            filesize : "0.8mb",
            close : true,
            tags : {
                isOpen : true,
                tagTitle : "Upload",
                tagColor: "green"
            }

        }
    ]

    useState()

  return (
    <div>
      <div ref={ref} className='fixed px-8 py-5 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>

        {data.map((item, idx) => (
            <Card data={item} key={idx} reference={ref} />
        ))}

      </div>
    </div>
  )
}

export default Foreground
