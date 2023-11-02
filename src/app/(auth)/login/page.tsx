
import TwitterLogo from '@/app/components/TwitterLogo'

import LoginForm from '@/app/components/LoginForm'
import Link from 'next/link'

// async function wait() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{resolve('done')},4000)
//     })
// }

export const metadata = {
    title : "Login",
    description : "login page for twitter"
}
export default function page() {
    return (
        <>
            <div className="bg-black flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href = '/'><TwitterLogo /></Link>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="relative mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <LoginForm />

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/signup" className="font-semibold leading-6 text-[#03A9F4] hover:text-blue-500">
                            Signup here
                        </Link>
                    </p>


                </div>

            </div>
        </>
    )
}
