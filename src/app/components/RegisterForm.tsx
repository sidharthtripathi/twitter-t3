"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
function RegisterForm() {
    const [loading,setLoading] = useState(false)
    const [errorMsg,setErrorMsg] = useState<string>('')
    const emailRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    async function  handleSubmit(e : any){
        e.preventDefault()
        setLoading(true)
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        const confirmPassword = confirmPasswordRef.current?.value
        const username = usernameRef.current?.value
        const name = nameRef.current?.value
        const bodyData = {email,password,confirmPassword,username,name}
        if(password!==confirmPassword){
            setErrorMsg('Passwords not matching !')
            setLoading(p=>!p)
            return
        }
        else if(password?.length!<8){
            setErrorMsg('password length smaller than 8 !')
            setLoading(p=>!p)
            return 
        }
        const res = await fetch('/register',{
            method : "POST",
            body : JSON.stringify(bodyData)
        })
        setLoading(p=>!p)
        if(!res.ok){
            const err = await res.json();
            setErrorMsg(err.error + " !")
            const id = setTimeout(()=>{
                setErrorMsg('');
                clearTimeout(id)
            },3000)
            return
        }
        else{  
            router.push('/login')

        }

    }
  return (
    <>
    <form className="space-y-4 md:space-y-3" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                      <input ref = {emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                      <input ref = {usernameRef} type="text" name="username" id="usename" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="johndoe123" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                      <input ref = {nameRef} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="John Doe" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input ref = {passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " required={true}/>
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                      <input ref = {confirmPasswordRef} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required={true}/>
                  </div>
                  
                  <button disabled = {loading} style={{cursor : loading ? "wait": "pointer"}} type="submit" className="w-full  text-white bg-[#03A9F4] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                  {errorMsg && <div className="text-xs text-red-500 ">{errorMsg}</div>}
                  <p className="text-sm font-light text-gray-500 ">
                      Already have an account? <Link href="/login" className="font-bold text-[#03A9F4] hover:underline ">Login here</Link>
                  </p>
                  
              </form>
              


              </>
  )
}

export default RegisterForm