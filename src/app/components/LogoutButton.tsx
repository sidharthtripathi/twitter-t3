import {BiLogOut} from 'react-icons/bi'
import Link from 'next/link'
function LogoutButton() {
  return (
    <Link href='/api/auth/signout' className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-full cursor-pointer'>
        < BiLogOut />
        <span className='ml-4 hidden md:block'>Logout</span>
      </Link >
  )
}

export default LogoutButton