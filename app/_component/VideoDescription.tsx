import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BadgeCheck } from 'lucide-react'
const VideoDescription = ({singlelist}:{singlelist : SingleCourseProp}) => {
    // i am accepting the data as a props from the singlelist state to display the video course description
    //the data is an object
  return (
    <>
 <h1 className='capitalize font-bold text-black text-lg  mt-1'>{singlelist.name}</h1>
<div className='flex gap-2 items-center text-sm mt-1'>
<Avatar>
   <AvatarImage src={singlelist.authorimage.url} alt="@shadcn"  className='object-cover'/>
   <AvatarFallback>CN</AvatarFallback>
 </Avatar>
<div className='flex flex-col'>
 <h1 className='font-semibold capitalize'>{singlelist.author}</h1>
 <h1 className='flex items-center gap-1 '>{singlelist.totalChapters} Chapters<BadgeCheck size={15} className='text-green-900' /> </h1>
</div>
</div>
<p className='text-black text-sm mt-1'>{singlelist.description}</p>
       
      
     
    </>
  )
}

export default VideoDescription  

 