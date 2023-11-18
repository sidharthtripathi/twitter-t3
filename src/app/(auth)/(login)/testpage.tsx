import TwitterLogo from "@/app/components/TwitterLogo";

import LoginForm from "@/app/components/LoginForm";
import Link from "next/link";

// async function wait() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{resolve('done')},4000)
//     })
// }

export const metadata = {
  title: "Login",
  description: "login page for twitter",
};
export default function page() {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <Link href="/">
            <TwitterLogo />
          </Link>
        </a>
        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
              Login
            </h1>
            <LoginForm />
            <p className="text-center text-blue-300 hover:underline">
              <Link href={"/signup"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
