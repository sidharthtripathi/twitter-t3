import React from 'react'
import UserCard from '../UserCard'
interface Props {
  className?: string
}
function Sidebar({ className }: Props) {
  return (
    <div className={className + " p-2 px-6"}>
      <div className='flex justify-center'>
        <input type="text" className=' p-2 px-4 bg-gray-700 rounded-full text-white' placeholder='search..' />
      </div>
      <div className='mt-3 shadow-sm bg-gray-800 py-2 px-4 rounded-2xl'>
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