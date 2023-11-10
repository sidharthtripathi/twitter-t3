import React from 'react'
import { AiOutlineHome, AiOutlineSearch, AiOutlineBell, AiOutlineMail, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import LogoutButton from '../LogoutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/options'
import LoginButton from '../LoginButton'
import Link from 'next/link'
import SearchModal from '../SearchModal'

async function Navbar() {
  const session = await getServerSession(authOptions)
  
  return (
    <div className='flex bg-black justify-around shrink-0 fixed inset-x-0 bottom-0 py-1 text-2xl sm:text-base sm:static sm:flex-col sm:justify-start sm:space-y-6 md:grow-[2] '>
      <Link href={'/'} className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2 '>
        <AiOutlineHome />
        <span className='hidden sm:block'>Home</span>
      </Link >
      <SearchModal/>
      <div className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2'>
        <AiOutlineBell />
        <span className='hidden sm:block '>Notification</span>
      </div>
      <div className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2'>
        <AiOutlineMail />
        <span className='hidden sm:block '>Messages</span>
      </div>
      <div className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2'>
        <BsBookmark />
        <span className='hidden sm:block '>Bookmark</span>
      </div>
      <Link href = {`/${session?.user.username}`} className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2'>
        <AiOutlineUser />
        <span className='hidden sm:block '>Profile</span>
      </Link>
      <div className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2'>
        < AiOutlineSetting />
        <span className='hidden sm:block '>More</span>
      </div>

      {session?.user ?  <LogoutButton/> : <LoginButton/>}
    </div>
  )
}

export default Navbar