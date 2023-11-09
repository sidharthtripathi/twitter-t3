"use client"
import {useRef} from 'react'
import TextAreaAuto from 'react-textarea-autosize'
function TextArea() {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  async function handleClick() {
    const payload = {
      title : inputRef.current?.value as string
    }
    const res = await fetch('http://localhost:3001/api/tweet/create',{
      method : "POST",
      body : JSON.stringify(payload)
    })
    
   
    
  }
  return (
    <>
    <TextAreaAuto
    ref={inputRef}
        placeholder="what's on your mind.."
          className="px-3 py-2 w-full bg-slate-700 text-white rounded-2xl resize-none"
          />
          <button
            onClick={()=>{
              handleClick()
            }}
           className="bg-blue-500 hover:bg-blue-700 duration-100 text-white font-bold px-4 py-2 rounded-full">Post
           </button>
          </>
  )
}

export default TextArea