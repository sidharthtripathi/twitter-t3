"use client"
import { signIn } from 'next-auth/react'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import GoogleButton from './GoogleButton'
function LoginForm() {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [opacity, setOpacity] = useState<"opacity-0" | "opacity-100">('opacity-0')
    async function handleSubmit(e: any) {
        e.preventDefault();
        setloading(true)
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        // const res = await wait()
        const result = await signIn('credentials', {
            redirect: false,
            email, password
        })
        setloading(s => !s)
        if (result?.error) {
            setOpacity('opacity-100')
            let timeId = setTimeout(() => {
                setOpacity('opacity-0')
                clearTimeout(timeId)
            }, 2000)
            return;
        }
        else {
            router.push('/')
        }

    }
    return (
        <>
            <form className="space-y-6 border border-slate-700 shadow-lg shadow-slate-700 rounded-md p-4 " onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            ref={emailRef}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder='email@company.com'
                            className="block bg-slate-900 outline-none border-none w-full rounded-md border-0 p-2 text-gray-300 shadow-sm  sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                            Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-[#03A9F4] hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            placeholder='********'
                            ref={passwordRef}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block  outline-none bg-slate-900 w-full rounded-md  p-2 text-gray-300 shadow-sm sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{ cursor: loading ? "wait" : "pointer" }}
                        className={`flex w-full  justify-center rounded-md bg-[#03A9F4] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    >

                        Sign in
                    </button>


                </div>
            </form>
            <GoogleButton />
            <div className={`relative -bottom-10 flex items-center p-4 mb-4 text-sm text-red-900 border border-red-300 rounded-lg bg-red-50 ${opacity} animate-bounce duration-300 transition-opacity`} role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Invalid Credentials ! </span>
                    <br />
                    Try Again
                </div>
            </div>
        </>
    )
}

export default LoginForm