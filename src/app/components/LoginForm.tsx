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
           
        </>
    )
}

export default LoginForm