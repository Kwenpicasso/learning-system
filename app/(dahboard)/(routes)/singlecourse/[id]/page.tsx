import EnrollSection from '@/app/_component/EnrollSection'
import VideoDescription from '@/app/_component/VideoDescription'
import VideoSection from '@/app/_component/VideoSection'
import { LockIcon, Play } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='w-full max h-full px-3  py-4 grid grid-cols-6 gap-3'>
     <div className='col-span-4 h-full  lg:col-span-6'>
    <VideoSection/>
     <VideoDescription/>
     </div>


     {/* right section */}
      <div className='col-span-2 h-[400px] lg:col-span-6'>
        {/* enroll section component */}
      <EnrollSection/>
       <div className='w-full h-full bg-white mt-2 rounded-lg shadow-lg flex gap-1 flex-col p-3'>
        <h1 className='capitalize font-semibold text-base text-black'>Contents</h1>
        <div className='w-full h-[40px] font-semibold text-sm px-3  border-1px border-gray-200 bg-green-900 text-white rounded-md border flex justify-between items-center'>
        <h1>1.Introduction</h1>
        <Play size={15}/>
        </div>
        <div className='w-full h-[40px] font-semibold text-sm px-3  border-1px border-gray-200 bg-orange-400 text-white rounded-md border flex justify-between items-center'>
        <h1>1.Introduction</h1>
        <LockIcon size={15}/>
        </div>
       </div>
     
      </div>
    </div>
    </div>
  )
}

export default page
