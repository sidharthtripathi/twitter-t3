import Link from "next/link"
import { BiLogIn } from "react-icons/bi"
function LoginButton() {
  return (
    <Link  href = '/login' className='flex bg-blue-600 items-center space-x-3 justify-center w-full hover:bg-blue-700 duration-100 py-2 rounded-full cursor-pointer'>
    < BiLogIn />
    <span className='font-bold hidden sm:block'>Login</span>
  </Link>
  )
}

export default LoginButton