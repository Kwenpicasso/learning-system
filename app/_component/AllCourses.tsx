
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'

const AllCourses = ({courselists}:{courselists: AllCourseProp[]}) => {
 
  
  return (
    <div className='w-full mt-3 grid grid-cols-3 gap-6 '>
   {courselists?.map((item) => (
       <div className='w-[368px] h-[250px] lg:mt-3 lg:col-span-3 lg:w-full flex flex-col justify-center items-center  ' key={item.id}>
       <Image loading='lazy' src={item.banner.url} width={360} height={360} alt='courses' className='rounded-lg object-cover'/>
       <div className='w-full flex gap-2 justify-start lg:justify-center mt-2 items-center'>
       <Avatar>
       <AvatarImage src={item.authorimage.url} alt="@shadcn"  className='object-cover'/>
       <AvatarFallback>CN</AvatarFallback>
     </Avatar>
    <div className='flex flex-col justify-center text-sm capitalize '>
    <h1 className='font-semibold '>{item.name}</h1>
    <h1 className='flex gap-1 justify-start items-center'>{item.author} | {item.totalChapters} Chapters <BadgeCheck size={15} className='text-green-900' /></h1>
    </div>
       </div>
       </div>
      
   ))}
   
    </div>
  )
}

export default AllCourses
