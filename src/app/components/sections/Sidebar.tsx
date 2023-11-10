import React from 'react'
import UserCard from '../UserCard'
function Sidebar() {
  return (
    <div className={ "flex-col items-center p-2 hidden md:flex md:grow-[3]"} >
      <div >
        <input type="text" className='py-2 px-3 w-full bg-gray-700 rounded-full' placeholder='search..' />
      </div>
      <div className=' py-2 px-4 mt-3 shadow-sm dark:bg-gray-800 rounded-2xl'>
        <h1 className='font-bold text-xl mb-4 dark:text-white'>Who to Follow</h1>
        <div className='space-y-4'>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar