import { LockIcon, Play } from 'lucide-react'
import React from 'react'

const VideoPlay = () => {
  return (
    <div className='w-full h-full bg-white flex gap-1 flex-col p-3'>
        <h1 className='capitalize font-semibold text-base text-black'>Contents</h1>
        <div className='w-full h-[50px] font-semibold text-sm px-3  border-1px border-gray-200 bg-green-200 text-green-900 rounded-md border flex justify-between items-center'>
        <h1>1.Introduction</h1>
        <Play size={15}/>
        </div>
       
       </div>
  )
}

export default VideoPlay
