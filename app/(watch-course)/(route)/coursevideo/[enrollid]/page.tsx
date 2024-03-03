'use client'
import { getSingleCourse } from '@/app/hygraphapi/Globalapi';
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";
import { Pause, Play } from 'lucide-react';

const page = ({params}:{params:any}) => {
  const [singlelist, setSinglelist] = useState<SingleCourseProp>();
  const [publish, setPublish] = useState<enrollUserId>();
  const [activeindex, setActiveIndex] = useState(0);
  
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
      <div className='w-full h-full bg-white flex gap-1 flex-col p-3'>
        <h1 className='capitalize font-semibold text-base text-black'>{singlelist?.name}</h1>
      {singlelist?.chapters.map((item,index) => (
          <div className={`w-full h-[50px] font-semibold text-sm cursor-pointer px-3 ${activeindex==index?'bg-green-200 text-green-900': null} border-1px border-gray-200 text-black rounded-md border flex justify-between items-center`} key={index} onClick={()=> setActiveIndex(index)}>
          <h1>{index}.{item.name}</h1>
          {activeindex==index? <Pause size={15}/> : <Play size={15}/>}
          </div>
      ))}
       
       </div>
      </div>
    
    </div>
  )
}

export default page
