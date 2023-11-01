
interface Props {
  className?: string
}
import { BiImageAdd, BiPoll , BiLocationPlus } from 'react-icons/bi'
import { BsFiletypeGif, BsEmojiLaughing } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/options'

async function Main({ className }: Props) {
  const session = await getServerSession(authOptions)
  return (
    <div className={className + " p-2 border-x border-x-slate-500"}>
      <div className='border-b pb-4 border-b-slate-600'>
        <div className="flex space-x-4 items-center">
          <img
            src={session ? session.user?.image as string : "https://seeklogo.com/images/M/microsoft-account-logo-2E31F79058-seeklogo.com.png"}
            alt="user profile"
            className="rounded-full w-12"
          />
          <input type="text" placeholder="what's on your mind..."
            className="px-3 py-4 w-full bg-slate-700 text-white rounded-2xl"
          />
        </div>
        <div className='flex justify-between items-center mt-3'>
          <div className="flex text-white w-full space-x-3 items-center text-xl">
            <BiImageAdd className='cursor-pointer' />
            <BsFiletypeGif className='cursor-pointer' />
            <BsEmojiLaughing className='cursor-pointer ' />
            <BiPoll className='cursor-pointer ' />
            <AiOutlineCalendar className='cursor-pointer ' />
            <BiLocationPlus className='cursor-pointer ' title='location' />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 duration-100 text-white font-bold px-4 py-2 rounded-full">Post</button>
        </div>
      </div>
    </div>
  )

}

export default Main