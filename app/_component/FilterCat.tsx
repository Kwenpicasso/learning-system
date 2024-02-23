'use client'

import React, { useState } from 'react'

const FilterCat = () => {
   const [active, setActive] = useState(0);
  const filter = [
    {
       id:1,
       name:'all',
       value:'all'
    },
    {
       id:2,
       name:'react js',
       value:'react js'
    },
    {
       id:3,
       name:'tailwind css',
       value:'tailwind css'
    },
    {
       id:4,
       name:'next js',
       value:'next js'
    },
    {
       id:5,
       name:'expo',
       value:'expo'
    },
    {
       id:6,
       name:'graphql',
       value:'graphql'
    },
 
   
]
  return (
    <div className='w-full h-[40px] flex gap-4 capitalize carousel'>
  {filter.map((item, index) => (
   <div className="carousel-item " key={index}>
    <h1 onClick={() => setActive(index)} className={`name ${active == index ? ' bg-green-900 text-white  ' : null}`}>{item.name}</h1>
   </div>
  ))}
    </div>
  )
}

export default FilterCat
