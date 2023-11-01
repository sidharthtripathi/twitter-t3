import {BiLogOut} from 'react-icons/bi'
import Link from 'next/link'
function LogoutButton() {
  return (
    <Link href='/api/auth/signout' className='flex bg-red-600 items-center space-x-3 justify-center w-full hover:bg-red-700 duration-100 py-2 rounded-full cursor-pointer'>
        < BiLogOut />
        <span className='font-bold hidden sm:block'>Logout</span>
      </Link >
  )
}

export default LogoutButton