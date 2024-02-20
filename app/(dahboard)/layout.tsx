import React from 'react'
import Logo from '../_component/Logo'
import Sidemenu from '../_component/Sidemenu'
import Navbar from '../_component/Navbar'
import Logout from '../_component/Logout'

const layout = ({children} : {children : React.ReactNode}) => {
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
    <div className='h-full w-full max'>
      {/* sidebar begin*/}
      <div className='w-[18%] lg:hidden fixed bg-green-900 flex flex-col justify-between items-start h-screen p-[2%] '>
     <div className='w-full flex flex-col justify-center items-center'>
     <div className='flex gap-1 w-full items-center text-white  text-lg'><Logo/><h1>LearningNinja</h1></div>
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
     </div>
     <Logout/>
      </div>
      {/* sidebar end*/}
      {/* navbar begin */}
      <div className='w-full max h-[70px] bg-white  shadow-md'>
      <Navbar/>
      </div>
        {/* navbar ends */}

      <div className='pl-[19%] lg:pl-0'>
      {children}
      </div>
    </div>
  )
}

export default layout
