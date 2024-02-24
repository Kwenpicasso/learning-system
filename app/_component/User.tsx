"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs'
import Image from "next/image";
import Link from "next/link";
import React from 'react'

const User = () => {
    const { user } = useUser();
 
  return (
  <>
   {!user ? (
    <h1 className=" w-[100px] h-[40px] flex justify-center items-center  border-green-900 border-[2px] bg-green-900 text-orange-300   cursor-pointer rounded-sm text-sm text-center"><Link href='/sign-in'>Get Started</Link></h1>
   ) : (
      <div className="flex gap-3 justify-end w-[200px] h-[40px]  items-center capitalize">
    
      <h1 className="font-semibold flex justify-center items-center gap-1">Hi,{user.firstName}!<Image width={30} height={30} src="/clap.gif" alt="clapping"/></h1>
    <UserButton afterSignOutUrl="/" />
    </div>
   )}
  </>
  )
}

export default User
