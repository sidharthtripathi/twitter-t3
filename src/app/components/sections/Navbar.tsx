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
    <div className={className + " text-white font-bold text-xl md:text-base "}>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer'>
        <AiOutlineHome />
        <span className=' ml-4 hidden md:block'>Home</span>
      </div>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer '>
        <AiOutlineSearch />
        <span className=' ml-4 hidden md:block' >Search</span>
      </div>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer'>
        <AiOutlineBell />
        <span className=' ml-4 hidden md:block'>Notification</span>
      </div>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer'>
        <AiOutlineMail />
        <span className=' ml-4 hidden md:block'>Messages</span>
      </div>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer'>
        <BsBookmark />
        <span className=' ml-4 hidden md:block'>Bookmark</span>
      </div>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer'>
        <AiOutlineUser />
        <span className=' ml-4 hidden md:block'>Profile</span>
      </div>
      <div className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-lg cursor-pointer'>
        < AiOutlineSetting />
        <span className=' ml-4 hidden md:block'>More</span>
      </div>

      {session?.user ?  <LogoutButton/> : <LoginButton/>}
    </div>
  )
}

export default Navbar