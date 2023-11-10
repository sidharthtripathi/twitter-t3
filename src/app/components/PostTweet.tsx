"use client"
import { useToast } from "@/app/components/ui/use-toast"
import {useState} from 'react'
import TextAreaAuto from 'react-textarea-autosize'
function PostTweet() {
  const {toast} = useToast()
  const [val,setVal] = useState("")
  async function handleClick() {
    toast({
      title : "Created",
      description : "Your post was created successfully"
    })
    const payload = {
      title : val
    }
    const res = await fetch('http://localhost:3001/api/tweet/create',{
      method : "POST",
      body : JSON.stringify(payload)
    })
   console.log(res)
    if(res.ok){
    setVal("")
    
    }
  }


  return (
    <div className='flex flex-col grow'>
    <TextAreaAuto
    onChange={(e)=>{setVal(e.target.value)}}
    value={val}
        placeholder="what's on your mind.."
          className="px-3 py-2 w-full bg-slate-700 text-white rounded-2xl resize-none"
          />
          
          <button
            onClick={()=>{
              handleClick()
            }}
            disabled = {val===""}
            style={{cursor : val==="" ? "not-allowed" : "pointer"}}
           className=" self-end mt-2 text-white dark:text-white bg-blue-500 hover:bg-blue-700 duration-100 font-bold px-4 py-2 rounded-full">Post
           </button>
          </div>
  )
}

export default PostTweet