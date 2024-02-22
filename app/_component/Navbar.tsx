
import { Input } from '@/components/ui/input'
import React from 'react'
import User from './User'
import { AlignLeft } from 'lucide-react'
import MobileNav from './MobileNav'



const Navbar = () => {
 
  return (
    <div className='lg:px-3 lg:pl-1 pl-[20%]  max  flex w-full h-[60px] items-center justify-between px-5 '>
     <MobileNav/>
      <Input type="search" placeholder="Search" className='w-[400px] lg:invisible rounded-full  ml-5 '/>
    <User/>
    </div>
  )
}

export default Navbar
