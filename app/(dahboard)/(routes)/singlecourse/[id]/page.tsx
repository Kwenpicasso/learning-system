'use client'
import EnrollSection from '@/app/_component/EnrollSection'
import MembershipSection from '@/app/_component/MembershipSection'
import VideoDescription from '@/app/_component/VideoDescription'
import VideoSection from '@/app/_component/VideoSection'
import  { getSingleCourse } from '@/app/hygraphapi/Globalapi'
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";

const page = ({params}:{params:any}) => {
  const [singlelist, setSinglelist] = useState<SingleCourseProp>();
  const { user } = useUser();
  const mail = user?.primaryEmailAddress?.emailAddress;

  // the useeffect hook allows the data run ones here and i am also passing the id from the params
  useEffect(() =>{
   oneCourse(params.id);
  },[user]);

  // to fetch all courses from the hygraphapi
  const oneCourse = (id: any) => {
   getSingleCourse(params.id, mail).then(resp=>{
    const data:any = resp;
    const data1:SingleCourseProp= data?.courses
    setSinglelist(data1)
   })
  }
  return (
    <div>
        <div className='w-full max h-full px-3  py-4 grid grid-cols-6 gap-3'>
        {/* left section */}  
     <div className='col-span-4 h-full  lg:col-span-6'>
      {/* i am passing the video as a props from the singlelist state which would be accepted in the videosection component */}
    {singlelist && <VideoSection video={singlelist?.chapters[0].video.url}/>}
    {/* i am passing the course data as a props from the singlelist state which would be accepted in the videodesccription component */}
     {singlelist && <VideoDescription singlelist={singlelist}/>}
     
     </div>


     {/* right section */}
      <div className='col-span-2 h-[400px] lg:col-span-6'>
        {/*this is the enroll section component */}
    {singlelist &&   <EnrollSection singlelist={singlelist}/>}
       {/*this is the membership section component */}
     <MembershipSection/>
      </div>
    </div>
    </div>
  )
}

export default page
