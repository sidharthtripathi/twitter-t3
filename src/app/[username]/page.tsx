import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import {BiMessageSquareDetail} from 'react-icons/bi'
import Tweet from "../components/Tweet"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/options"

interface Props {
    params : {username : string}
}
export function generateMetadata({params: {username}} : Props){
  return {
    title : username
  }
}
async function page({params : {username}} : Props) {
  const session = await getServerSession(authOptions)
  const user = await db.user.findFirst({
    where : {
      username,
    },
    select : {
      username : true,
      name : true,
      image : true,
      id : true
    }
  })
  if(!user) return notFound()
  const tweets = await db.tweet.findMany({
      where : {
        authorId : user.id
      },
      orderBy : {
        createdAt : 'desc'
      },
    })
   
  return (
    <div className="w-1/2 overflow-y-scroll grow-[5] px-2">
      {/* user header */}
      <div>
        <div className="relative">
          <img src="https://marketplace.canva.com/EAFB2eB7C3o/1/0/1600w/canva-yellow-and-turquoise-vintage-rainbow-desktop-wallpaper-Y4mYj0d-9S8.jpg" alt="coverimage"
          className="w-full h-44 object-cover"
          />
          <img src={user.image} alt="userprofile" 
            className="absolute bottom-0 translate-y-1/2 left-1 rounded-full w-30"
          />
        </div>

        { 
        !(session?.user?.username===user.username) ? 
          <div className="flex justify-end items-center p-2 space-x-4">
          <BiMessageSquareDetail size = {24}/>
          <button className="bg-white text-black font-bold px-3 py-1 rounded-full">follow</button>
        </div>
        :
        <div className="flex justify-end items-center p-2 space-x-4">
          
          <button className="bg-white text-black font-bold px-3 py-1 rounded-full">Edit Profile</button>
        </div>

        }
      </div>

      {/* user timeline */}
      <div className="mt-4">
      {tweets.map(t=>(
        <Tweet userimg={user.image} name={user.name} username={user.username} title={t.tweet} key={t.id}  />
      ))}
      </div>


    </div>
  )
}

export default page