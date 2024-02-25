import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EnrollSection = () => {
  return (
    <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white'>
    <Image src='/hand.png' width={100} height={200} alt='hand'/>
  <div className='flex flex-col items-center text-center justify-center gap-2'>
  <h1 className='capitalize font-semibold text-lg text-black'>enroll to this course</h1>
    <p className='text-xs'>Choose from over 210,000 online video courses with new additions published every month</p>
    <Button className='bg-green-900 text-orange-500 hover:opacity-75'>Enroll Now</Button>

  </div>
   </div>
  )
}

export default EnrollSection
