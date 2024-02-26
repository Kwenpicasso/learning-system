import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BadgeCheck } from 'lucide-react'
const VideoDescription = () => {
  return (
    <>
        <h1 className='capitalize font-bold text-black text-lg  mt-1'>next js complete course - full course 2024</h1>
   <div className='flex gap-2 items-center text-sm mt-1'>
   <Avatar>
      <AvatarImage src="/ww.webp" alt="@shadcn"  className='object-cover'/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  <div className='flex flex-col'>
    <h1 className='font-semibold'>Simoon Grimm</h1>
    <h1 className='flex items-center gap-1 '>3 Chapters<BadgeCheck size={15} className='text-green-900' /> </h1>
  </div>
   </div>
   <p className='text-black text-sm mt-1'>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
    </>
  )
}

export default VideoDescription
