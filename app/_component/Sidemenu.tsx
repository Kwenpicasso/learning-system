'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname} from 'next/navigation'
import React from 'react'



const Sidemenu = ({name, icon, link} : MenuProps) => {
    
    const path = usePathname();
    const isActive = (path === '/' && link === '/') || path === link || path?.startsWith(`${link}/`);
    
  return (
    <div className='w-full flex flex-col gap-4 justify-start mt-[8%] items-start'>
      
       <Link href={link}>
        <div className={cn('w-[200px] rounded-sm hover:bg-orange-500 flex gap-6 capitalize text-white justify-start text-sm  h-[40px] pl-6 items-center', isActive && 'bg-orange-500')}>
            <Image src={icon} width={25} height={25} alt='menu' />
            <h1>{name}</h1>
        </div>
       </Link>
      
    </div>
  )
}

export default Sidemenu
