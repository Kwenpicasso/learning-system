'use client'
import React from 'react'
import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import { Power } from 'lucide-react';

const Logout = () => {
  const { signOut } = useClerk();
  const {  user } = useUser();
  const router = useRouter()
  return (
    <div>
       
        {user ? (<button className='w-[200px]  rounded-sm h-[40px] hover:animate-pulse hover:bg-orange-500 text-white text-sm flex gap-3 justify-center items-center' onClick={() => signOut(() => router.push("/"))}>Sign out <Power/></button>) : ''}
      
    </div>
  )
}

export default Logout
