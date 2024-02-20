
import { Input } from '@/components/ui/input'
import React from 'react'
import User from './User'
import { AlignLeft } from 'lucide-react'



const Navbar = () => {
 
  return (
    <div className='lg:px-3 pl-[20%]  max  flex w-full h-[70px] items-center justify-between px-5 '>
      <AlignLeft className='hidden lg:block'  size={35}/>
      <Input type="search" placeholder="Search" className='w-[400px] lg:invisible rounded-full  ml-5 '/>
    <User/>
    </div>
  )
}

export default Navbar
