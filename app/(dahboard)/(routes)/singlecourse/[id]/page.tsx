'use client'
import EnrollSection from '@/app/_component/EnrollSection'
import MembershipSection from '@/app/_component/MembershipSection'
import VideoDescription from '@/app/_component/VideoDescription'
import VideoSection from '@/app/_component/VideoSection'
import  { getSingleCourse } from '@/app/hygraphapi/Globalapi'
import React, { useEffect, useState } from 'react'

const page = ({params}:{params:any}) => {
  const [singlelist, setSinglelist] = useState<SingleCourseProp>();

  // the useeffect hook allows the data run ones here and i am also passing the id from the params
  useEffect(() =>{
   oneCourse(params.id);
  },[]);

  // to fetch all courses from the hygraphapi
  const oneCourse = (id: any) => {
   getSingleCourse(params.id).then(resp=>{
    console.log(resp);
    const data:any = resp;
    const data1:SingleCourseProp= data?.courses
    setSinglelist(data1)
   })
  }
  return (
    <div>
        <div className='w-full max h-full px-3  py-4 grid grid-cols-6 gap-3'>
     <div className='col-span-4 h-full  lg:col-span-6'>
      {/* i am passing the video as a props from the singlelist state which would be accepted in the videosection component */}
    {singlelist && <VideoSection video={singlelist?.chapters[0].video.url}/>}
    {/* i am passing the course data as a props from the singlelist state which would be accepted in the videodesccription component */}
     {singlelist && <VideoDescription singlelist={singlelist}/>}
     
     </div>


     {/* right section */}
      <div className='col-span-2 h-[400px] lg:col-span-6'>
        {/* enroll section component */}
      <EnrollSection/>
       {/* membership section component */}
     <MembershipSection/>
      </div>
    </div>
    </div>
  )
}

export default page
