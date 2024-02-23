import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { BadgeCheck } from 'lucide-react'
const AllCourses = () => {
  return (
    <div className='w-full mt-3 grid grid-cols-3 gap-2'>
      <div className='w-[350px] h-[250px] lg:col-span-3 lg:w-full'>
      <img loading='lazy' src='/nj.webp' alt='courses' className='rounded-lg  object-cover'/>
      <div className='w-full flex gap-2 justify-start mt-2 items-center'>
      <Avatar>
      <AvatarImage src="/ww.webp" alt="@shadcn"  className='object-cover'/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
   <div className='flex flex-col justify-center text-sm capitalize '>
   <h1 className='font-semibold'>next js complete course - full course 2024</h1>
   <h1 className='flex gap-1 justify-start items-center'>Simmon Grimm | 3 Chapters <BadgeCheck size={15} className='text-green-900' /></h1>
   </div>
      </div>
      </div>
     
   
    </div>
  )
}

export default AllCourses
