import React from 'react'
import UserCard from '../UserCard'
interface Props {
  className?: string
}
function Sidebar({ className }: Props) {
  return (
    <div className={className + " flex-col items-center p-2 "} >
      <div >
        <input type="text" className='py-2 px-3 w-full bg-gray-700 rounded-full text-white' placeholder='search..' />
      </div>
      <div className='w-fit py-2 px-4 mt-3 shadow-sm bg-gray-800 rounded-2xl'>
        <h1 className='font-bold text-xl mb-4 text-white'>Who to Follow</h1>
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