'use client'
import VideoPlay from '@/app/_component/VideoPlay'
import { getSingleCourse } from '@/app/hygraphapi/Globalapi';
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";

const page = ({params}:{params:any}) => {
  const [singlelist, setSinglelist] = useState<SingleCourseProp>();
  const [publish, setPublish] = useState<enrollUserId>();
  
  const { user } = useUser();
  const mail = user?.primaryEmailAddress?.emailAddress;
  
    // the useeffect hook allows the data run ones here and i am also passing the id from the params
    useEffect(() =>{
      oneCourse(params.enrollid);
     },[user]);
   
     // to fetch all courses from the hygraphapi
     const oneCourse = (id: any) => {
      getSingleCourse(params.enrollid, mail).then(resp=>{
       
       const data:any = resp;
       console.log('first',data)
       const data1:SingleCourseProp= data?.courses
       const data2:enrollUserId= data?.userEnrollCourses
   
       setSinglelist(data1)
       setPublish(data2)
       console.log('second',data1)
      })
     }
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
