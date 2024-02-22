import React from 'react'

const FilterCat = () => {
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
  {filter.map((item) => (
   <div className="carousel-item " key={item.id}>
    <h1 className=' w-[100px] h-[40px] flex justify-center items-center text-green-900 border-green-900 border-[2px] hover:bg-green-900 hover:text-orange-300  hover:animate-pulse cursor-pointer rounded-sm text-sm text-center '>{item.name}</h1>
   </div>
  ))}
    </div>
  )
}

export default FilterCat
