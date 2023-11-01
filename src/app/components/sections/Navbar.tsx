import React from 'react'
import { AiOutlineHome, AiOutlineSearch, AiOutlineBell, AiOutlineMail, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import LogoutButton from '../LogoutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/options'
import LoginButton from '../LoginButton'

interface Props {
  className?: string
}
async function Navbar({ className }: Props) {
  const session = await getServerSession(authOptions)
  
  return (
    <div className={className + " text-white text-xl sm:space-y-4 p-2 px-3 "}>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer'>
        <AiOutlineHome />
        <span className='font-bold hidden sm:block'>Home</span>
      </div>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer '>
        <AiOutlineSearch />
        <span className='font-bold hidden sm:block' >Search</span>
      </div>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer'>
        <AiOutlineBell />
        <span className='font-bold hidden sm:block'>Notification</span>
      </div>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer'>
        <AiOutlineMail />
        <span className='font-bold hidden sm:block'>Messages</span>
      </div>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer'>
        <BsBookmark />
        <span className='font-bold hidden sm:block'>Bookmark</span>
      </div>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer'>
        <AiOutlineUser />
        <span className='font-bold hidden sm:block'>Profile</span>
      </div>
      <div className='flex items-center space-x-3 justify-center w-full hover:bg-gray-800 py-2 rounded-full cursor-pointer'>
        < AiOutlineSetting />
        <span className='font-bold hidden sm:block'>More</span>
      </div>

      {session?.user ?  <LogoutButton/> : <LoginButton/>}
    </div>
  )
}

export default Navbar