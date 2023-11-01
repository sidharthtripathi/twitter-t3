import TwitterLogo from '@/app/components/TwitterLogo'
import RegisterForm from '@/app/components/RegisterForm'
import React from 'react'
export const metadata = {
  title : "Register",
  description : "Register page for twitter"
}
function page() {
  return (
    <section className="bg-gray-50 animate__animated animate__fadeIn ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
          <TwitterLogo/>
          
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create Account
              </h1>
              <RegisterForm/>
              
          </div>
      </div>
  </div>
</section>
  )
}

export default page

