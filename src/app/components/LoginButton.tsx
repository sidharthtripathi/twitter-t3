import Link from "next/link"
import { BiLogIn } from "react-icons/bi"
function LoginButton() {
  return (
    <Link  href = '/login' className='flex pl-3 items-center md:justify-start justify-center w-full hover:bg-gray-800 duration-150 py-2 rounded-full cursor-pointer'>
    < BiLogIn />
    <span className='ml-4 hidden md:block'>Login</span>
  </Link>
  )
}

export default LoginButton