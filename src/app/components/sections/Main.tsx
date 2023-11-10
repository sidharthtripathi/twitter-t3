import PostTweet from '../PostTweet'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/options'
import Timeline from '../Timeline'
async function Main() {
  const session = await getServerSession(authOptions)
 

  return (
    <div className="w-1/2 overflow-y-scroll grow-[5] px-2">
     <div className='flex p-2 space-x-2'>
      <div className='flex justify-center items-start'>
        <img src={session?.user.image} alt="userprofile"
          className='aspect-square h-12 w-12 rounded-full'
        />
      </div>
      
        <PostTweet/>
        
 
     </div>
     <Timeline/>
    </div>
  )

}

export default Main