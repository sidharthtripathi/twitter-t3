import {BiLogOut} from 'react-icons/bi'
import Link from 'next/link'
function LogoutButton() {
  return (
    <Link href='/api/auth/signout' className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2'>
        < BiLogOut />
        <span className='hidden sm:block'>Logout</span>
      </Link >
  )
}

export default LogoutButton