"use client"

import { signIn } from "next-auth/react"


function GoogleButton() {
    async function handleClick(e: any) {
        e.preventDefault()
        await signIn('google', {
            redirect: true,
            callbackUrl: '/'
        })
    }
    return (
        <>
            <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p
                    className="mx-4 mb-0 text-center font-semibold text-gray-400 ">
                    OR
                </p>
            </div>
            <button onClick={handleClick} className="w-full h-12 px-6 border-2 border-slate-600 rounded-full transition duration-300 
 hover:border-blue-400 ">
                <div className="relative flex items-center  justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                    <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300  sm:text-base">Continue with Google</span>
                </div>
            </button>
        </>
    )
}

export default GoogleButton