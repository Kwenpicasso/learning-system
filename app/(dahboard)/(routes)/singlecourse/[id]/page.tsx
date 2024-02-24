import EnrollSection from '@/app/_component/EnrollSection'
import VideoDescription from '@/app/_component/VideoDescription'
import VideoSection from '@/app/_component/VideoSection'
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
       <div className='w-full h-[200px] bg-red-800 mt-2'>
        

       </div>
     
      </div>
    </div>
    </div>
  )
}

export default page
