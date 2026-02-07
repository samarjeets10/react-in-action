import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

function Card({data, reference}) {
  return (
    <div>
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.8} dragTransition={{ bounceStiffness: 200, bounceDamping : 20}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.description}</p>

        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-3 py-3 px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {
                        data.close ? <IoClose /> : <LuDownload size="0.7em" color="#fff" />
                    }
                </span>
            </div>

            {
                data.tags.isOpen && (
                    <div className={`tag w-full py-4 ${data.tags.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tags.tagTitle}</h3>
                    </div>
                )
            }
        </div>
      </motion.div>
    </div>
  )
}

export default Card
