import VideoPlay from '@/app/_component/VideoPlay'
import React from 'react'

const page = () => {
  return (
    <div className='max w-full h-full  grid grid-cols-6'>
          {/* video section */}
      <div className='h-full col-span-4 lg:col-span-4 p-3'>
       {/* video */}
       <div className='w-full rounded-md h-[500px] bg-black'>

       </div>
      </div>
      {/* videoplay buttons section */}
      <div className='h-full bg-red-400 col-span-2 lg:col-span-4'>
      <VideoPlay/>
      </div>
    
    </div>
  )
}

export default page
