"use client"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/app/components/ui/alert-dialog"
  import { useState } from 'react'
import UserCard from './UserCard'
import { Skeleton } from "@/app/components/ui/skeleton"
import {AiOutlineSearch} from 'react-icons/ai'
interface User {
  name : string
  username : string
  image : string
}

function SearchModal() {
    const [val,setVal] = useState("")
    const [fetching,setFetching] = useState(false)
    const [users,setUsers] = useState<User[]>([])
     async function handleSearch(e : any){
      if(e.key === 'Enter'){
        setFetching(p=>!p)
        const res = await fetch('/api/users',{
          method  : "POST",
          body : JSON.stringify({input : val})
        })
        setFetching(p=>!p)
        const users = await res.json()
        setUsers(users)
      }
    }
  return (
    <AlertDialog>
    <AlertDialogTrigger>
    <div className='flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2 '>
        <AiOutlineSearch />
        <span className='hidden sm:block ' >Search</span>
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="text-center">Search Here..</AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          Search by username or full name
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className='flex flex-col w-full items-center space-y-3' >
        <input type="text" className='py-2 px-3  bg-gray-700 rounded-full' placeholder='search..' 
          value={val}
          onChange={(e)=>{setVal(e.target.value)}}
          onKeyDown={(e)=>{handleSearch(e)}}
        />

        {/* search results */}
         <div className='flex justify-center  space-y-2 w-full'>

            { (users.length===0 && fetching) ?
              <div className='w-full space-y-2'>
            <Skeleton className="w-full h-10 rounded-full" />
            <Skeleton className="w-full h-10 rounded-full" />
            <Skeleton className="w-full h-10 rounded-full" />
            </div>
            :
            <div>
              {
                users.map(user=>(
                  <UserCard key = {user.username} username={user.username} name={user.name} image={user.image}/>
                ))
              }
            </div>
            }
    
         </div>
        
      </div>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
    </AlertDialogContent>
  </AlertDialog>
  )

}

export default SearchModal