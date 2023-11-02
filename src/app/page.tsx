import React from 'react'
import Navbar from './components/sections/Navbar'
import Main from './components/sections/Main'
import Sidebar from './components/sections/Sidebar'
function page() {
  return (
    <div className='w-screen h-screen flex'>
      <Navbar className='sm:w-[10%] md:w-[20%] sm:relative sm:block w-screen bg-black flex flex-row fixed bottom-0 '/>
      <Main className='w-[60%] grow overflow-y-scroll px-6'/>
      <Sidebar className='w-[20%] hidden xl:flex'/>
    </div>
  )
}

export default page