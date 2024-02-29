'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { EnrollUser, PubishEnrollUser } from '../hygraphapi/Globalapi';

const EnrollSection = ({singlelist}:{singlelist: SingleCourseProp}) => {
  const { user } = useUser();
  const router = useRouter();
  const mail = user?.primaryEmailAddress?.emailAddress;
  

  //this is the function to enroll users to a course
  const Enroll = async () => {
    // if there is a user it runs this
    if(user){
    await EnrollUser(singlelist.id,mail).then(async resp =>{
      console.log('enroll',resp);
      if(resp){
    
        const data:any = resp;
        const data1:YourResponseType= data?.createUserEnrollCourse?.id
        await PubishEnrollUser(data1)
      }
    })
    } 
    //if theres no user it tells the user to sign in 
    else{
     router.push('/sign-in');
    }
     
  }
  return (
    // a boolean that checks if a course is free or not
   <>
  {singlelist.free ? (
     <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white'>
     <Image src='/hand.png' width={100} height={200} alt='hand'/>
   <div className='flex flex-col items-center text-center justify-center gap-2'>
   <h1 className='capitalize font-semibold text-lg text-black'>enroll to this course</h1>
     <p className='text-xs'>Choose from over 210,000 online video courses with new additions published every month</p>
     <Button className='bg-green-900 text-orange-500 hover:opacity-75 w-full' onClick={() => Enroll()}>Enroll Now</Button>
 
   </div>
    </div>
  ): (
    <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white mt-2'>
    <Image src='/hand.png' width={100} height={200} alt='hand'/>
  <div className='flex flex-col items-center text-center justify-center gap-2'>
  <h1 className='capitalize font-semibold text-lg text-black'>become a member!</h1>
    <p className='text-xs'>Choose from over 210,000 online video courses with new additions published every month</p>
    <Button className='bg-green-900 text-orange-500 hover:opacity-75 w-full'>Buy Memebership at $30.99</Button>

  </div>
   </div>
  )}
   </>
  )
}

export default EnrollSection
