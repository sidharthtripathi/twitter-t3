"use client"
import {BiLogOut} from 'react-icons/bi'
import { signOut } from 'next-auth/react'
function LogoutButton() {
  return (
    <div onClick={()=>{signOut()}} className='flex bg-red-600 items-center space-x-3 justify-center w-full hover:bg-red-700 duration-100 py-2 rounded-full cursor-pointer'>
        < BiLogOut />
        <span className='font-bold hidden sm:block'>Logout</span>
      </div>
  )
}

export default LogoutButton