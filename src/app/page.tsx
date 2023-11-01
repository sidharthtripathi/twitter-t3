import React from 'react'
import Navbar from './components/sections/Navbar'
import Main from './components/sections/Main'
import Sidebar from './components/sections/Sidebar'
function page() {
  return (
    <div className='flex w-screen h-screen '>
      <Navbar className='bg-black sm:static sm:block flex flex-row w-full sm:w-auto sm:grow-[0.5] fixed bottom-0 '/>
      <Main className='bg-black grow-[6]'/>
      <Sidebar className='bg-black md:block hidden'/>
    </div>
  )
}

export default page