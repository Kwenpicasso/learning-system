"use client"
import React from 'react'


 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft } from 'lucide-react'
import Sidemenu from './Sidemenu'
import Logout from './Logout'
 
const SHEET_SIDES = [ "left"] as const
 
type SheetSide = (typeof SHEET_SIDES)[number]
const MobileNav = () => {
    const menus = [
        {
            name: 'all courses',
            icon:'/book.gif',
            link: '/'
        },
        {
            name: 'Dashboard',
            icon:'/dash.gif',
            link: '/dashboard'
        },
        {
            name: 'newsletter',
            icon:'/news.gif',
            link: '/course'
        },
        {
            name: 'my courses',
            icon:'/solid.gif',
            link: '/mycouses'
        },
    ]
  return (
    <div className="hidden lg:block ">
    {SHEET_SIDES.map((side) => (
      <Sheet key={side}>
        <SheetTrigger asChild>
        <AlignLeft className='hidden lg:block cursor-pointer text-green-900'  size={30}/>
        </SheetTrigger>
        <SheetContent side={side} className='bg-green-900 w-[70%] h-full flex flex-col justify-between items-center'>
        <div className='mt-[25%] '>
     {menus.map((menu) => (
        <Sidemenu
        key={menu.link}
        name={menu.name}
        icon={menu.icon}
        link={menu.link}
         />
      ))}
        
     </div>
     <Logout/>
        </SheetContent>
      </Sheet>
    ))}
  </div>
  )
}

export default MobileNav
