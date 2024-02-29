import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const MembershipSection = () => {
  return (
    <div className='w-full h-[200px] rounded-lg shadow-lg flex items-center p-5 bg-white mt-2'>
    <Image src='/hand.png' width={100} height={200} alt='hand'/>
   
   </div>
  )
}

export default MembershipSection
