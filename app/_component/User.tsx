"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs'
import Image from "next/image";
import React from 'react'

const User = () => {
    const { isLoaded, isSignedIn, user } = useUser();
 
    if (!isLoaded || !isSignedIn) {
      return null;
    }
  return (
    <div className="flex gap-2 justify-end w-[200px] h-[40px]  items-center capitalize">
    <h1 className="font-semibold flex justify-center items-center gap-1">Hi,{user.firstName}<Image width={30} height={30} src="/clap.gif" alt="clap"/></h1>
  <UserButton afterSignOutUrl="/" />
  </div>
  )
}

export default User
