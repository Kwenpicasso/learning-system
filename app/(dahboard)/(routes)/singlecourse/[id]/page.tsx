'use client'
import VideoDescription from '@/app/_component/VideoDescription'
import VideoSection from '@/app/_component/VideoSection'
import  { EnrollUser, PubishEnrollUser, getSingleCourse } from '@/app/hygraphapi/Globalapi'
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from "sonner"
import { Timer } from 'lucide-react'


const page = ({params}:{params:any}) => {
  const [singlelist, setSinglelist] = useState<SingleCourseProp>();
  const [publish, setPublish] = useState<enrollUserId>();
  const { user } = useUser();
  const mail = user?.primaryEmailAddress?.emailAddress;
  const router = useRouter();

  // the useeffect hook allows the data run ones here and i am also passing the id from the params
  useEffect(() =>{
   oneCourse(params.id);
  },[user]);

  // to fetch all courses from the hygraphapi
  const oneCourse = (id: any) => {
   getSingleCourse(params.id, mail).then(resp=>{
    
    const data:any = resp;
    const data1:SingleCourseProp= data?.courses
    const data2:enrollUserId= data?.userEnrollCourses[0]

    setSinglelist(data1)
    setPublish(data2)
  
   })
  }
  //this is the function to enroll users to a course
  const Enroll = async () => {
    // if there is a user it runs this
    if(user){
    await EnrollUser(singlelist?.id,mail).then(async resp =>{
      if(resp){
        
        const data:any = resp;
        
        const data1:YourResponseType= data?.createUserEnrollCourse?.id
        await PubishEnrollUser(data1).then(result=> {
          
          console.log('result',result);
          if(result){
            router.push(`/coursevideo/${singlelist?.id}`)
            toast("Course Enrolled!!", {
              description: "Course was Successfully enrolled",
            
            })
           
          }
        })
      }
    })
    } 
    //if theres no user it tells the user to sign in 
    else{
     router.push('/sign-in');
    }
     
  }
  return (
    
        <div className='w-full max px-4  bg-gray-100 h-full pt-[5%] grid grid-cols-6 gap-5 '>
        {/* left section */}  
     <div className='col-span-4  lg:col-span-6 '>
      {/* i am passing the video as a props from the singlelist state which would be accepted in the videosection component */}
    {singlelist && <VideoSection video={singlelist?.chapters[0].video.url}/>}
    {/* i am passing the course data as a props from the singlelist state which would be accepted in the videodesccription component */}
     {singlelist && <VideoDescription singlelist={singlelist}/>}
     
     <div className='w-full  mt-5 p-3 flex flex-col gap-2 rounded-lg border border-gray-200'>
     <h1 className='font-semibold'>Course Outline</h1>
     <div className='w-full  p-3 rounded-md border border-gray-200 flex justify-start items-start flex-col text-sm'>
      <h3 className='font-semibold'>Module 1: introduction to project management</h3>
      <div className='flex item-center gap-1 w-full '><Timer size={20} className='text-green-900'/> <p className='text-gray-500'>3 hours 30mins</p></div>
      <h3 className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, id?</h3>
     </div>
    
     </div>
     </div>


     {/* right section */}
      <div className='col-span-2 h-[400px] lg:col-span-6'>
        {/*this is the enroll section component */}
        {publish?.courseId ?  <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white'>
     <Image src='/hand.png' width={100} height={200} alt='hand'/>
   <div className='flex flex-col items-center text-center justify-center gap-2'>
   <h1 className='capitalize font-semibold text-lg text-black'>Continue your learning</h1>
     <p className='text-xs'>Choose from over 210,000 online video courses with new additions published every month</p>
     <Button className='bg-green-900 text-orange-500 hover:opacity-75 w-full'onClick={() => router.push(`/coursevideo/${singlelist?.id}`)} >Continue</Button>
 
   </div>
    </div> : null }
        {singlelist?.free && !publish?.courseId ? 
     <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white'>
     <Image src='/hand.png' width={100} height={200} alt='hand'/>
   <div className='flex flex-col items-center text-center justify-center gap-2'>
   <h1 className='capitalize font-semibold text-lg text-black'>enroll to this course</h1>
     <p className='text-xs'>Choose from over 210,000 online video courses with new additions published every month</p>
     <Button className='bg-green-900 text-orange-500 hover:opacity-75 w-full'onClick={() => Enroll()} >Enroll Now</Button>
 
   </div>
    </div>
  : !publish?.courseId ?
    <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white mt-2'>
    <Image src='/hand.png' width={100} height={200} alt='hand'/>
  <div className='flex flex-col items-center text-center justify-center gap-2'>
  <h1 className='capitalize font-semibold text-lg text-black'>become a member!</h1>
    <p className='text-xs'>Choose from over 210,000 online video courses with new additions published every month</p>
    <Button className='bg-green-900 text-orange-500 hover:opacity-75 w-full'>Buy Memebership at $30.99</Button>

  </div>
   </div> : null
}
    
  
      </div>
    </div>
    
  )
}

export default page
